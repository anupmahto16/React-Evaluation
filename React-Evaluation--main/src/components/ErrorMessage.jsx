// src/components/ErrorMessage.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ErrorMessage = ({ message }) => (
  <Box p="4" bg="red.500" color="white" rounded="md" textAlign="center">
    <Text>{message}</Text>
  </Box>
);

export default ErrorMessage;
