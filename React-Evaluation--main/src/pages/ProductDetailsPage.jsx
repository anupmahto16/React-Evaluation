// src/pages/ProductDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Text, Button, useToast, useDisclosure } from '@chakra-ui/react';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    onClose();
    toast({
      title: "Item added to cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Box p="4">
      <Box p="8" bg="white" shadow="md" rounded="md">
        <Text fontSize="2xl">{product.title}</Text>
        <Text>{product.category}</Text>
        <Text>${product.price}</Text>
        <Text>{product.description}</Text>
        <Button colorScheme="teal" mt="4" onClick={onOpen}>Add to Cart</Button>
        {isOpen && (
          <AlertDialog isOpen={isOpen} onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader>Add to Cart</AlertDialogHeader>
                <AlertDialogBody>Are you sure you want to add this item to cart?</AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button colorScheme="teal" onClick={handleAddToCart} ml="3">Confirm</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetailsPage;
