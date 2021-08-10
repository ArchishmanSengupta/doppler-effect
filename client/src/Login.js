import React from 'react'

// RENDER out client access using a single container from bootstrap library

import { Container } from 'react-bootstrap'


// https://developer.spotify.com/documentation/general/guides/authorization-guide/

const AUTH_URL="https://accounts.spotify.com/authorize?client_id=c33f91ccfc09457eabda45fc6a8458cb&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return( <Container>
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
            Login With Spotify
        </a>
    </Container>
    )
}
