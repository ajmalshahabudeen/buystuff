"use client";
import React from "react";
import GoogleSignIn from "../authentication/SignIn";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { poppins } from "@/config/fonts";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [passwordMatchError, setPasswordMatchError] = React.useState(false);
  const route = useRouter();
  const color = useColorModeValue("white", "gray.800");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      const interval = setInterval(() => {
        setPasswordMatchError(false);
        clearInterval(interval);
      },3000)
    } else {
      const data = { email, password };
    }
  };

  return (
    <Box className={"flex flex-col mix-w-xs"} bg={color} p={8} rounded={10}>
      <p className={`text-3xl py-10`}>Create an account</p>
      <Box className={poppins.className}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input
              size={"lg"}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Cool Name"
              required
              autoComplete="off"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              size={"lg"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="cooluser@gmail.com"
              required
              autoComplete="off"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              size={"lg"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              required
            />
          </FormControl>
          <FormControl isInvalid={passwordMatchError}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              size={"lg"}
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="**********"
              required
            />
          <FormErrorMessage>Passwords do not match.</FormErrorMessage>
          </FormControl>
          <Button
            variant="outline"
            // isLoading
            loadingText="Please wait..."
            type="submit"
          >
            Register
          </Button>
        </form>
      </Box>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter px="4">or</AbsoluteCenter>
      </Box>
      <Flex flexDirection={"column"} gap={5}>
        <Button
          variant="link"
          onClick={() => {
            route.push("/login");
          }}
        >
          Already have an account?
        </Button>
      </Flex>
    </Box>
  );
};
