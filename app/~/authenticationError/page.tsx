'use client'
import { poppins } from '@/config/fonts'
import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const AuthenticationError = () => {
    const route = useRouter()
  return (
    <Box className={poppins.className}>
      <Center h={"100vh"} flexDirection={"column"} gap={5}>
        <Heading>You are not logged in</Heading>
        <Text>Please log in to continue</Text>
        <Button colorScheme='teal' variant='outline' onClick={() => route.replace("/login")}>Login</Button>
      </Center>
    </Box>
  )
}

export default AuthenticationError