import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Link,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React from "react";
import NextLink from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

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
                  <Link as={NextLink} href="/shop" fontSize={"2.8rem"}>
                    Home
                  </Link>
                </Box>
              </ScaleFade>
              <ScaleFade initialScale={0.0} in={isOpen} delay={0.3}>
                <Box>
                  <Link as={NextLink} href="/shop" fontSize={"2.6rem"}>
                    Products
                  </Link>
                </Box>
              </ScaleFade>
              <ScaleFade initialScale={0.0} in={isOpen} delay={0.4}>
                <Box>
                  <Link as={NextLink} href="/shop" fontSize={"2.2rem"}>
                    Contact
                  </Link>
                </Box>
              </ScaleFade>
              <ScaleFade initialScale={0.0} in={isOpen} delay={0.5}>
                <Box>
                  <Link as={NextLink} href="/shop" fontSize={"1.5rem"}>
                    Help
                  </Link>
                </Box>
              </ScaleFade>
            </Center>
            <Box className="fixed bottom-5 right-5">
                <ThemeToggle />
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
