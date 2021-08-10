#############
Login AUTH_URL
#############

The AUTH_URL uses various query parameters:

#. client_id: Accessing the client id
#. response_type: code (default)
#. redirect_uri: local host:3000/8000, anything works
#. scopes: Now there are few scopes that we will be using here
    * streaming
    * user-read-email: Accessing the emails
    * user-read-private: Access the user information
    * user-library-read: Check if a song is in user's favorite library
    * user-library-modify: Add songs to favorites
    * userp-playback-state: If user is playing the song
    * user-modify-playback-state: MODIFY which songs there are actually playing

    
#############
Spotify Web API Node
#############

Authorization
Supplying an access token is required for all requests to the Spotify API. 
This wrapper supports three authorization flows - The Authorization Code flow (signed by a user), the Client Credentials flow (application authentication - the user isn't involved), and the Implicit Grant Flow (For completely clientside applications). 
See Spotify's Authorization guide for detailed information on these flows.

SPOTIFY WEB API Node helps us to convert the AUTH_URL into an accessible 
#. access_token 
#. refresh_token