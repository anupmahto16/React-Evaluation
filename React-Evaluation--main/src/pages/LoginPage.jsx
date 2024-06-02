// src/pages/LoginPage.js
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Input, Button, Text, Flex } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      login(response.data.token, email);
      history.push('/home');
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh">
      <Box p="8" bg="white" shadow="md" rounded="md">
        <Text mb="4" fontSize="2xl" textAlign="center">Login</Text>
        <form onSubmit={handleSubmit}>
          <Input
            mb="4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <Input
            mb="4"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" colorScheme="teal" width="full">
            Login
          </Button>
          {error && <Text color="red.500" mt="2">{error}</Text>}
        </form>
      </Box>
    </Flex>
  );
};

export default LoginPage;
