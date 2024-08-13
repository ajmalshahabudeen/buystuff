"use client";
import { Logo } from "@/components/MainHead/Logo";
import { ThemeToggle } from "@/components/MainHead/ThemeToggle";
import Help from "@/components/Other/Help";
import { GetSession } from "@/utils/session";
import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const route = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState<string>();

  const fetchSession = async () => {
    const session = await GetSession();
    if (session?.user) {
      setLoggedIn(true);
      setUsername(session?.user?.name || "");
    }
  };
  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Box className="fixed top-0 flex w-full p-10 items-center justify-between gap-4">
        <Logo />
        <Box className="hidden md:inline-flex items-center gap-5">
          {loggedIn ? (
            <Text>{username}</Text>
          ) : (
            <Button
              variant={"link"}
              size={"lg"}
              onClick={() => route.push("/login")}
            >
              Login / Register
            </Button>
          )}
          <Help />
          <ThemeToggle />
        </Box>
        <Box className="flex md:hidden fixed bottom-0 right-0 pb-4 justify-center items-center w-full gap-5">
          <Button
            variant={"link"}
            size={"lg"}
            onClick={() => route.push("/login")}
          >
            Login / Register
          </Button>
          <Help />
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
