import { useState } from 'react';
import { Box, Button, Input, FormLabel } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async(e) => {
    e.preventDefault();

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email && password) {
        console.log("Signup successful", { email, password });
        navigate("/login"); 
      } else {
        throw new Error("Signup failed"); 
      }
    } catch (error) {
      setError("Signup failed. Please try again.");
    }
  }

  return (
    <Box maxW="sm" mx="auto">
      <form onSubmit={handleSignup}>
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
        <Button type="submit" colorScheme="blue" mt={4}>Sign Up</Button>
      </form>
    </Box>
  );
}

export default Signup;
