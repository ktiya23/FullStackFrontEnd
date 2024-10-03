import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Box, Button, Input, FormLabel } from '@chakra-ui/react';


const ProductForm = ({onSuccess}) => {
    const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(e)=>{
    e.prevent.Default();

    try {
        await axios.post('/api/products', { name, price }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          });
          setName(''); // Clear form fields
          setPrice('');
          onSuccess(); 
    } catch (error) {
        setError('Failed to add product');

    }
  }
  return (

    <Box maxW="sm" mx="auto" mt={4}>
      <form onSubmit={handleSubmit}>
        <FormLabel>Product Name</FormLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <FormLabel>Product Price</FormLabel>
        <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit" colorScheme="green" mt={4}>Add Product</Button>
      </form>
    </Box>
  )
}

export default ProductForm
