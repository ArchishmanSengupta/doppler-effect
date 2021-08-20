// Custom hook for access, refresh token and code
import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function useAuth(code) {

    // Storing access token, refresh token and expiresIn which we are returning from the server
    const [accessToken, setAccessToken] =useState();
    const [refreshToken, setRefreshToken] =useState();
    const [expiresIn, setExpiresIn] =useState();

    // Getting that information using useEffect hook
    
    useEffect(()=>{

        // posting the code in the host and this will call all the code from the server
        
        axios.post('http://localhost:3001/login',{
        code,
        }).then(res=>{
            console.log(res.data);
        });
    }, [code]);

}

