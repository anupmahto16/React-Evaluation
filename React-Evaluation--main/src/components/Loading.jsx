// src/components/Loading.js
import React from 'react';
import { Spinner, Box } from '@chakra-ui/react';

const Loading = () => (
  <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
    <Spinner size="xl" />
  </Box>
);

export default Loading;
