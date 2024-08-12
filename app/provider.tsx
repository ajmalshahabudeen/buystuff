// app/providers.tsx
"use client";

import theme from "@/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
