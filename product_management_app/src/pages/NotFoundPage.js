import { Box , Text} from '@chakra-ui/react'
import React from 'react'

const NotFoundPage = () => {
  return (
    <Box textAlign="center" mt={20}>
        <Text fontSize="2xl" fontWeight="bold" >404 - page not found</Text>
        <Text>this page doesn't exist</Text>
    </Box>
  )
}

export default NotFoundPage
