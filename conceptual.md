### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

A JS web token is a login token and an internet standard with signitures. It contains three parts A header, payload and a signiture that authenticates
users.

- What is the signature portion of the JWT?  What does it do?

This validates the token, It encodes the header and payload using the base64 url encoding and concatenating the two together

- If a JWT is intercepted, can the attacker see what's inside the payload?

No, the JWT is encoded with a hashing function - Its difficult to view internal contents and payload

- How can you implement authentication with a JWT?  Describe how it works at a high level.

- Compare and contrast unit, integration and end-to-end tests.

Unit tests test individual functions to make sure they execute their right functionality. Integration tests the integration of individual microservices and functions. End to end tests test user workflows

- What is a mock? What are some things you would mock?

Mocking tests allow for the 'mocking' of parts of a function such as a request or response body for example and re-create the entire functionality for testing purposes. For example, lets say a function takes in the body of a request object, you can mock the entire request and only focus on populating the necessary parts of the object so you can test properly

- What is continuous integration?

Continous integration refers to merging updates from other branches into the main branch on a daily basis. Allows for modular tracking of changes more easily

- What is an environment variable and what are they used for?

An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. 

- What is TDD? What are some benefits and drawbacks?

TDD refers to test driven development. Meaning that you test - integration, unit and or end to end as you develop. This is a little slower, but one can have more assurance that there will be fewer potential issues down the road

- What is the value of using JSONSchema for validation?

JSONSchema allows for quick validation of fields.

- What are some ways to decide which code to test?

Its best to not worry so much about complete coverage and test each bit of functionality before moving forward
TEST DRIVEN DEVELOPMENT. Its good practice to prioritize unit testing first. Mocking can be a way to test
API or more interwoven functionalities. 

- What does `RETURNING` do in SQL? When would you use it?

RETURNING is used when data is modified - either through INSERT, DELETE or UPDATE. It allows one to obtain the values of the modified column instead of do that in a separate
SELECT operation

- What are some differences between Web Sockets and HTTP?

Web sockets are a communication protocol that are over a single, TCP connection that involves a handshaking ping between clients and servers that allows for instantaneous
connection between the entities (Bidirectional messages). It basically renews the HTTP connection with a handshake that updates the state on the client. HTTP requests reload and arent
fully duplex like websockets, they are half duplex, only one request at a time, unidirectional. 


- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

The program went more deeply into Express as the following chapter involves REACTJS - which is built on top of Express. Flask seemed to be more simplistic and basic and is an MVT - model,
view, template architecture while the NodeJS stack backend framework, REACT is an MVC - model, view, controller architecture. I personally liked using controllers and the model centered 
architecture. It seems that larger, and more complex projects are better suited with express. Class organization and layers allows for an easier understanding and is probably better for scaling 
purposes. 
