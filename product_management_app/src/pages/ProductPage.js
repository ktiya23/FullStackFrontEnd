import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const ProductPage = () => {

    const [product , setProduct] = useState([]);

    useEffect(()=>{
        fetchProducts();
    },[])

    const fetchProducts = async()=>{
        try {
            const response = await axios.get("api/products",{
                headers:{ Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
            setProduct(response.data)
        } catch (error) {
            console.error("failed to fetch products");
            
        }
    }
  return (
    <Box p={4}>
        <ProductForm onSuccess={fetchProducts}/>
        <ProductList products={product} onDelete={fetchProducts}  />
    </Box>
  )
}

export default ProductPage
