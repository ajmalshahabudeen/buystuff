"use client";
import { Logo } from "@/components/MainHead/Logo";
import { ThemeToggle } from "@/components/MainHead/ThemeToggle";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Box className="fixed top-0 flex w-full p-10 items-center justify-between gap-4">
        <Logo />
        <Box className="inline-flex items-center gap-5">
          <Button
            variant={"link"}
            size={"lg"}
            onClick={() => route.push("/login")}
          >
            Login / Register
          </Button>
          <ThemeToggle />
        </Box>
      </Box>
      <Box className="flex flex-col gap-3 items-center">
        <p className="text-6xl">Welcome</p>
        <p className="text-3xl">
          Buy anything you{" "}
          <span className="font-bold italic underline">Desire</span>
        </p>
        <Button
          variant={"outline"}
          size={"lg"}
          className="mt-10"
          onClick={() => route.push("/shop")}
        >
          Shop Now
        </Button>
      </Box>
    </main>
  );
}
