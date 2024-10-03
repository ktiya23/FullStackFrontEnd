import { Button, List, ListItem } from '@chakra-ui/react'
import React from 'react'

const ProductList = ({products , onDelete}) => {
  return (
    <List spacing={3}>
        {
            products.map(product=>(
                <ListItem key={product.id}>
                    {product.name} - ${product.price}
                    <Button colorScheme='red' onClick={()=> onDelete(product.id) }>Delete</Button>
                </ListItem>
            ))
        }
    </List>
  )
}

export default ProductList
