import { RegisterForm } from "@/components/Forms/RegisterForm";
import { Box, Center } from "@chakra-ui/react";
import React from "react";

const RegisterPage = () => {
  return (
    <Box className='flex min-h-screen justify-center items-center bg-[url("/images/shopping-wall-two.jpg")] bg-cover relative'>
      <Box className="absolute bg-black bg-opacity-50 backdrop-blur top-0 left-0 w-full h-full z-0" />
      <Center h={"100vh"} flexDirection={"column"} zIndex={1} padding={"5"}>
        <RegisterForm />
      </Center>
    </Box>
  );
};

export default RegisterPage;
