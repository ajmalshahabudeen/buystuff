"use client";
import React from "react";
import GoogleSignIn from "../authentication/SignIn";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { poppins } from "@/config/fonts";
import { CredentialsSignInAction } from "@/utils/authActions/signInActions";

export const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    const data = { email, password };
    await CredentialsSignInAction(data);
  };

  return (
    <Box className={"flex flex-col mix-w-xs"}>
      <p className={`text-3xl py-10`}>
        Welcome back, <br /> Login to your Account
      </p>
      <Box className={poppins.className}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              autoFocus
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
          <Button
            variant="outline"
            // isLoading
            loadingText="Please wait..."
            type="submit"
          >
            Login
          </Button>
        </form>
      </Box>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter px="4">or</AbsoluteCenter>
      </Box>
      <GoogleSignIn />
    </Box>
  );
};
