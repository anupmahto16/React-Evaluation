// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Box, Select } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (err) {
      setError('Error fetching products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    setSearchParams({ sort: sortBy });
    setProducts((prevProducts) =>
      [...prevProducts].sort((a, b) =>
        sortBy === 'asc' ? a.price - b.price : b.price - a.price
      )
    );
  };

  const handleFilterChange = (e) => {
    const category = e.target.value;
    setSearchParams({ category });
    fetchProducts();
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Box p="4">
      <Box mb="4">
        <Select placeholder="Sort by Price" onChange={handleSortChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
        <Select placeholder="Filter by Category" onChange={handleFilterChange}>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="home-decor">Home Decor</option>
        </Select>
      </Box>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
