import { useState } from 'react';
import { Box, Button, Input, FormLabel } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      
      const fakeResponse = {
        data: {
          token: 'fake-jwt-token',
        }
      };

      localStorage.setItem('authToken', fakeResponse.data.token);

      navigate('/products');
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box maxW="sm" mx="auto">
      <form onSubmit={handleLogin}>
        <FormLabel>Email</FormLabel>
        <Input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <FormLabel>Password</FormLabel>
        <Input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit" colorScheme="blue" mt={4}>Log In</Button>
      </form>
    </Box>
  );
};

export default Login;
