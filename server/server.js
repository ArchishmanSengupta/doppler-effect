require('dotenv').config()
const express = require('express');
const spotifyWebApi= require('spotify-web-api');

const app = express();
app.post('/login',(req,res)=>{
    // The code that's returned as a query parameter to the redirect URI
    const code=req.body.code;
    
    // credentials
    const spotifyApi = newspotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })

    // Retrieve an access token and a refresh token
    spotifyApi.
    authorizationCodeGrant(code)
    .then(
        data=>{
            res.json({
                accessToken:data.body.access_token,
                refreshToken:data.body.refresh_token,
                expiresIn; data.body.expires_in
            })
    })
    // CATCHING the error
    .catch(()=>{
        res.sendStatus(400)
    })
})

app.listen(3001)