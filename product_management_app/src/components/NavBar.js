import React, { useContext } from 'react'
import AuthContext from '../context/authContext';
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';


const NavBar = () => {
    const {user , logout} = useContext(AuthContext);

  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Box>
          <Link as={RouterLink} to="/" p={2}>Home</Link>
          {user && <Link as={RouterLink} to="/products" p={2}>Products</Link>}
        </Box>
        <Box>
          {!user ? (
            <>
              <Link as={RouterLink} to="/login" p={2}>Login</Link>
              <Link as={RouterLink} to="/signup" p={2}>Sign Up</Link>
            </>
          ) : (
            <Button colorScheme="red" onClick={logout}>Logout</Button>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default NavBar
