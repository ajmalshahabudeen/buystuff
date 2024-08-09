"use client";
import { Button, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon_mode = useColorModeValue(
    "line-md:sunny-outline-to-moon-loop-transition",
    "line-md:sunny-outline-loop"
  );
  return (
    <header>
      <IconButton
        onClick={toggleColorMode}
        variant="outline"
        icon={<Icon icon={icon_mode} />}
        aria-label="Toggle dark mode"
      />
    </header>
  );
};
