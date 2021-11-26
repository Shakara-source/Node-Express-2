// TESTS BUG #1

The first bug was within auth/login. The issue had to do with an error in displaying the proper status code to 
an inauthenticated user. The issue was resolved once the await keyword was applied to the User.authenticate() function.
The architecture of this code base relies heavily on asynchronous operations. 

// TESTS BUG #2

Second was within GET USERS. Should display - {username, first_name, last_name}, displayed {"email": "email1", "first_name": "fn1", "last_name": "ln1", "phone": "phone1", "username": "u1"}


// TESTS BUG #3

checks for existing username - added in the for loop



// TESTS BUG #4

Denying an authorized user to patch their own profiles. Made a new middleware layer that checks for same user status and admin status alike

// TESTS BUG #5

Denying an authorized user to patch their own profiles. Made a new middleware layer that checks for same user status and admin status alike - had to check for 'admin' within the patch user controller

// TESTS BUG #6

Middleware function had an inappropriately structured error message that went would only catch and register an error if the try function would fail. When a problematic token would be passed, it would display an error originating from the jwt.decode() function.
