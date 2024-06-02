// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, email, logout } = useContext(AuthContext);

  return (
    <Flex as="nav" p="4" bg="teal.500" color="white" justify="space-between">
      {isAuthenticated ? (
        <>
          <Text>{email}</Text>
          <Flex>
            <Link to="/home">
              <Button colorScheme="teal" mr="4">
                Home
              </Button>
            </Link>
            <Button onClick={logout} colorScheme="teal">
              Logout
            </Button>
          </Flex>
        </>
      ) : (
        <Link to="/login">
          <Button colorScheme="teal">Login</Button>
        </Link>
      )}
    </Flex>
  );
};

export default Navbar;
