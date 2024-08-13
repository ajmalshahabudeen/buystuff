import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Link,
  ScaleFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import NextLink from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useRouter } from "next/navigation";
import { GetSession } from "@/utils/session";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const route = useRouter();

  const [loggedIn, setLoggedIn] = React.useState(false);

  const fetchSession = async () => {
    const session = await GetSession();
    if (session?.user) {
      setLoggedIn(true);
    }
  };
  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <Box>
      <IconButton
        aria-label="Open Menu"
        icon={<Icon icon={"hugeicons:menu-circle"} fontSize={"1.5rem"} />}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        variant={"ghost"}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody>
            <Center h={"full"} flexDirection={"column"} gap={15}>
              <ScaleFade initialScale={0.0} in={isOpen} delay={0.2}>
                <Box>
                  <Link
                    as={NextLink}
                    href="/shop"
                    fontSize={"2.8rem"}
                    onClick={onClose}
                  >
                    Home
                  </Link>
                </Box>
              </ScaleFade>
              <ScaleFade initialScale={0.0} in={isOpen} delay={0.3}>
                <Box>
                  <Link
                    as={NextLink}
                    href="/shop/products"
                    fontSize={"2.6rem"}
                    onClick={onClose}
                  >
                    Products
                  </Link>
                </Box>
              </ScaleFade>
              <ScaleFade initialScale={0.0} in={isOpen} delay={0.4}>
                <Box>
                  <Link
                    as={NextLink}
                    href="/shop/contact"
                    fontSize={"2.2rem"}
                    onClick={onClose}
                  >
                    Contact
                  </Link>
                </Box>
              </ScaleFade>
              <ScaleFade initialScale={0.0} in={isOpen} delay={0.5}>
                <Box>
                  <Link
                    as={NextLink}
                    href="/shop/help"
                    fontSize={"1.5rem"}
                    onClick={onClose}
                  >
                    Help
                  </Link>
                </Box>
              </ScaleFade>
            </Center>
            <ScaleFade
              initialScale={0.0}
              in={isOpen}
              delay={0.5}
              className="fixed bottom-5 right-5"
            >
              <Box className="flex gap-5 items-center">
                {!loggedIn && (
                  <Box className="flex gap-5 items-center">
                    <Button
                      variant={"link"}
                      size={"lg"}
                      onClick={() => route.push("/login")}
                    >
                      Login
                    </Button>
                    <Text>/</Text>
                    <Button
                      variant={"link"}
                      size={"lg"}
                      onClick={() => route.push("/register")}
                    >
                      Sign Up
                    </Button>
                  </Box>
                )}
                <ThemeToggle />
              </Box>
            </ScaleFade>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
