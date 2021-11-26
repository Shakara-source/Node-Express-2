process.env.NODE_ENV = "test";


const app = require("../app");
const request = require("supertest");
const db = require("../db");
const bcrypt = require('bcryptjs');
const createToken = require("../helpers/createToken");
const { authUser } = require('../middleware/auth');
const jwt = require("jsonwebtoken");
const { response } = require("express");


jest.mock("supertest"); // Mocking for a module import


const tokens = {};

/** before each test, insert u1, u2, and u3  [u3 is admin] */

beforeEach(async function() {
  async function _pwd(password) {
    return await bcrypt.hash(password, 1);
  }

  let sampleUsers = [
    ["u1", "fn1", "ln1", "email1", "phone1", await _pwd("pwd1"), false],
    ["u2", "fn2", "ln2", "email2", "phone2", await _pwd("pwd2"), false],
    ["u3", "fn3", "ln3", "email3", "phone3", await _pwd("pwd3"), true]
  ];

  for (let user of sampleUsers) {
    await db.query(
      `INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      user
    );
    tokens[user[0]] = createToken(user[0], user[6]);
  }
});

//U1 request

const mockReqU1 = () => {
  const req = {};
  req.body = { _token: tokens.u1 }
  req.curr_username = jest.fn().mockReturnValue(req);
  req.curr_admin = jest.fn().mockReturnValue(req);
  return req;
};

//Admin User Request

const mockReqU3 = () => {
  const req = {};
  req.body = { _token: tokens.u3 }
  req.curr_username = jest.fn().mockReturnValue(req);
  req.curr_admin = jest.fn().mockReturnValue(req);
  return req;
};

//Invalid User Token
const mockReqNA = () => {
  const req = {};
  req.body = { _token: 'invalidLala' }
  return req;
};

const mockRes = () => {
  const res = {};
  return res;
};

test('Should pass the folowing user -U1- request into middleware', () => {
  const mockedNext = jest.fn();
  const mockedReq = mockReqU1();
  const mockedRes = mockRes();
  // const mockedEntries = {
  //     body: {
  //       _token: tokens.u1
  //     }
  // };/*...whatever mocked response you want back from your request*/
  

  authUser(mockedReq, mockedRes, mockedNext)

  // expect(result).to.equal(mockedEntires.body);
  expect(mockedNext.mock.calls.length).toBe(1);
  expect(mockedNext.mock.calls).toEqual([[]])
  expect(mockedReq.curr_username).toBe('u1')
  expect(mockedReq.curr_admin).toBe(false)
  // expect(mockedRest.json).toHaveBeenCalledWith(mockedRes.data)
});


test('Should pass the folowing user -U3- request into middleware', () => {
  const mockedNext = jest.fn();
  const mockedReq = mockReqU3();
  const mockedRes = mockRes();
 
  authUser(mockedReq, mockedRes, mockedNext)

  // expect(result).to.equal(mockedEntires.body);
  expect(mockedNext.mock.calls.length).toBe(1);
  expect(mockedNext.mock.calls).toEqual([[]])
  expect(mockedReq.curr_username).toBe('u3')
  expect(mockedReq.curr_admin).toBe(true)
  // expect(mockedRest.json).toHaveBeenCalledWith(mockedRes.data)
});

// TESTS BUG #6 - Should not pass into middleware layer. This is due to inaporpriately placed next() designator and  
test('Should pass the folowing user -NA- request into middleware', () => {
  const mockedNext = jest.fn();
  const mockedReq = mockReqNA();
  const mockedRes = mockRes();
 
  authUser(mockedReq, mockedRes, mockedNext)

  // expect(result).to.equal(mockedEntires.body);
  expect(mockedNext.mock.calls.length).toBe(1);
  expect(mockedNext.mock.calls).toEqual([[{status:401, message: 'Unauthorized'}]])
  expect(mockedReq.curr_username).toBe(undefined)
  expect(mockedReq.curr_admin).toBe(undefined)
  // expect(mockedRest.json).toHaveBeenCalledWith(mockedRes.data)
});




afterEach(async function() {
  await db.query("DELETE FROM users");
});

afterAll(function() {
  db.end();
});



                                                             