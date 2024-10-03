import { useState } from 'react';
import { Box, Button, Input, FormLabel } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async(e) =>{
    e.preventDefault();
    try {
        const response = await axios.post("/api/signup" , {email , password})
        navigate("/login")
    } catch (error) {
        setError("signup failed")
    }
  }
  return (
    <Box maxW="sm" mx="auto">
      <form onSubmit={handleSignup}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit" colorScheme="blue" mt={4}>Sign Up</Button>
      </form>
    </Box>
  )
}

export default Signup
