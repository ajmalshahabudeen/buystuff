'use client'
import { Box, Button, Center, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFoundPage = () => {
    const route = useRouter()
  return (
    <Center h={"100vh"} flexDirection={"column"}>
        <Text fontSize={["3xl", "4xl", "5xl"]}>404 - Page Not Found</Text>
        <Button colorScheme='teal' variant='outline' className='mt-5' onClick={() => route.replace("/shop") }>
            Back to Shopping
        </Button>
    </Center>
  )
}

export default NotFoundPage