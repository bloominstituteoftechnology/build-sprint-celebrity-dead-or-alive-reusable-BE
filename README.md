# Backend

## API Endpoints



## NO LOGIN REQUIRED

## Base Route - celeb-death-status.herokuapp.com/api

### POST Register Endpoint - /register
  This endpoint will allow you to create a new user for the app, and will return the id, username, and the encrypted password (will be removed from the return later)

  {
    "username": "swampthing",
    "password": "greenisgood",
    "score": "0" (this can be left out when adding a user, as it defaults to 0)
  }

### POST Login Endpoint - /login
  This endpoint will allow you to log in to the app, at the moment returns a token.  The sample logins are username: flash, password: wallysux -- username: wonderwoman, password: balady -- username:swampthing, password: greenisgood  It will return this object:
  {
      "message": "Welcome, flash!"
      "token": encryptedtokenhere
  }

### GET celebrities endpoints - /celebs, /celebs/:id

The first endpoint will return a list of all celebs in the database, the second will return the specified celebrity.

## REQUIRES A USER IS LOGGED IN

## Base Route - celeb-death-status.herokuapp.com/api/protected

### GET users endpoint - /users
### GET user by id endpoint - /users/:id
These endpoints will allow you to bring back a list of users (or a particular user), but only if there is a valid token from logging in. When not logged in, it will return an error.

:id in the url is the user id

### PUT users endpoint (strictly to add points to a user) - /users/:id
This endpoint will be used to add points to a user's total

### DELETE user endpoint - /users/:id
This endpoint will delete the user specified in the :id portion of the route

### POST Add a celebrity endpoint - /celebs
Use this endpoint to add a new celebrity to the database in the following format:
{
    "name": "Terry Pratchett",
    "imageurl": "https://static.tvmaze.com/uploads/images/medium_portrait/173/433425.jpg",
    "info": "British Author",
    "dead": "true"
}

### PUT update a celebrity endpoint - /celebs/:id
This is to update errors in the celebrity file, mostly will be used to switch "dead" from "false" to "true"

### DELETE delete a celebrity from the list endpoint - /celebs/:id
This will allow you to removed a celebrity from the database entirely.



