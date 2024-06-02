// src/components/ProductCard.js
import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Box p="4" bg="white" shadow="md" rounded="md">
      <Text fontSize="xl">{product.title}</Text>
      <Text>{product.category}</Text>
      <Text>${product.price}</Text>
      <Link to={`/products/${product.id}`}>
        <Button colorScheme="teal" mt="4">More Details</Button>
      </Link>
    </Box>
  );
};

export default ProductCard;
