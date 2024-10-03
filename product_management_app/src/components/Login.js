import React, { useContext, useState } from 'react'
import AuthContext from '../context/authContext'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { Box, Button, FormLabel, Input } from '@chakra-ui/react';

const Login = () => {

    const {login} = useContext(AuthContext);
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post("/api/login" , {email , password});
            login(response.data.token);
            navigate("/products")
        }catch(error){
            setError("invalid credential")
        }
    }

  return (
    <Box maxw="sm" mx="auto">
        <form onSubmit={handleLogin}>
            <FormLabel>Email</FormLabel>
            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <FormLabel>Password</FormLabel>
            <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            {
                error && <p style={{color:"red"}}>{error}</p>
            }
            <Button type='Submit' colorScheme='blue'>Login</Button>
        </form>
    </Box>
  )
}

export default Login
