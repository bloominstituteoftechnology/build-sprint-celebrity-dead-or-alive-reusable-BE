# Backend

## API Endpoints

### Register Endpoint - celeb-death-status.herokuapp.com/api/register
  This endpoint will allow you to create a new user for the app, and will return the id, username, and the encrypted password (will be removed from the return later)

  {
    "username": "swampthing",
    "password": "greenisgood",
    "score": "0" (this can be left out when adding a user, as it defaults to 0)
  }

### Login Endpoint - celeb-death-status.herokuapp.com/api/login
  This endpoint will allow you to log in to the app, at the moment returns a token.  The sample logins are username: flash, password: wallysux -- username: wonderwoman, password: balady -- username:swampthing, password: greenisgood  It will return this object:
  {
      "message": "Welcome, flash!"
      "token": encryptedtokenhere
  }

### GET users endpoint - celeb-death-status.herokuapp.com/api/protected/users
### GET user by id endpoint - celeb-death-status.herkuap.com/api/protected/users/:id
These endpoints will allow you to bring back a list of users (or a particular user), but only if there is a valid token from logging in. When not logged in, it will return an error.

:id in the url is the user id

### PUT users endpoint (strictly to add points to a user) - celeb-death-status.herokuapp.com/api/protected/users/:id
This endpoint will be used to add points to a user's total

