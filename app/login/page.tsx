import { LoginForm } from "@/components/Forms/loginForm";
import { Logo } from "@/components/MainHead/Logo";
import { ThemeToggle } from "@/components/MainHead/ThemeToggle";
import { Box } from "@chakra-ui/react";
import React from "react";

const LoginPage = () => {
  return (
    <Box className="flex flex-row min-h-screen items-center">
      <Box className="px-10">
        <Box className="inline-flex justify-between w-full mb-10">
          <Logo />
          <ThemeToggle />
        </Box>
        <LoginForm />
      </Box>
      <Box className='relative bg-[url("/images/shopping-wall.jpg")] bg-cover md:flex hidden w-full h-screen'>
        <Box className="absolute bg-black bg-opacity-50 top-0 left-0 w-full h-full"></Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
