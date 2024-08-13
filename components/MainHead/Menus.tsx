import { Box, Center, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

const Menus = () => {
  return (
    <Box>
        <Center>
            <Flex gap={10}>
                <Link as={NextLink} href="/shop">Home</Link>
                <Link as={NextLink} href="/shop/products">Products</Link>
                <Link as={NextLink} href="/shop/contact">Contact</Link>
                <Link as={NextLink} href="/shop/help">Help</Link>
            </Flex>
        </Center>
    </Box>
  )
}

export default Menus