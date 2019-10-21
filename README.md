# Backend

## API Endpoints

### Register Endpoint - celeb-death-status.herokuapp.com/api/auth/register
  This endpoint will allow you to create a new user for the app, and will return the id, username, and the encrypted password (will be removed from the return later)

### Login Endpoint - celeb-death-status.herokuapp.com/api/auth/login
  This endpoint will allow you to log in to the app, at the moment returns a token.  The sample login info is username: ckent, password: notsuperman.  It will return this object:
  {
      "message": "Welcome, ckent!"
      "token": encryptedtokenhere
  }