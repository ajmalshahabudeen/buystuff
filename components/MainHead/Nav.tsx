"use client";
import React from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Box, Flex, Show } from "@chakra-ui/react";
import Avatar from "./Avatar";
import Menus from "./Menus";
import MobileMenu from "./MobileMenu";
import MobileFooter from "./MobileFooter";

export const Nav = () => {
  return (
    <Box>
      <Show above="md">
        <Box className="flex justify-between px-20 py-5 fixed top-0 w-full bg-inherit">
          <Logo />
          <Menus />
          <Box className="flex gap-5">
            <Avatar />
            <ThemeToggle />
          </Box>
        </Box>
      </Show>
      <Show below="md">
        <Box className="fixed top-0 w-full bg-inherit">
          <Flex justifyContent={"space-between"} p={5}>
            <Logo />
            <MobileMenu />
          </Flex>
        </Box>
        <Box className="fixed bottom-0 w-full bg-inherit">
          <MobileFooter />
        </Box>
      </Show>
    </Box>
  );
};
