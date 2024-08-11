import React from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Box } from "@chakra-ui/react";

export const Nav = () => {
  return (
    <Box className="flex justify-between px-20 py-5 fixed top-0 w-full bg-inherit">
      <Logo />
      hehe
      <ThemeToggle />
    </Box>
  );
};
