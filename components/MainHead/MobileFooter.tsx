"use client";
import signOutAction from "@/utils/authActions/signOutAction";
import { GetSession } from "@/utils/session";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const MobileFooter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const route = useRouter();

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
    <Box className="border-t-2">
      <Flex justifyContent={"space-around"} gap={5} p={2}>
        <Box>
          <IconButton
            variant="ghost"
            icon={<AccountIcon />}
            aria-label="Get Help"
            size={"lg"}
            onClick={() => route.push("/shop/account")}
          />
        </Box>
        <Box>
          <IconButton
            variant="ghost"
            icon={<CartIcon />}
            aria-label="Get Help"
            size={"lg"}
            onClick={() => route.push("/shop/cart")}
          />
        </Box>
        <Box>
          <IconButton
            variant="ghost"
            icon={<SettingsIcon />}
            aria-label="Get Help"
            size={"lg"}
            onClick={() => route.push("/shop/settings")}
          />
        </Box>
        {loggedIn && (
          <Box>
            <IconButton
              variant="ghost"
              icon={<LogoutIcon />}
              aria-label="Get Help"
              size={"lg"}
              onClick={onOpen}
            />
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent m={5}>
                <ModalHeader>Confirm</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Are you sure you want to logout?</Text>
                </ModalBody>
                <ModalFooter gap={5}>
                  <Button onClick={onClose}>Close</Button>
                  <Button onClick={() => signOutAction()} colorScheme="red">
                    Logout
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default MobileFooter;

const AccountIcon = () => {
  return (
    <Icon icon={"material-symbols:account-circle-full"} fontSize={"1.5rem"} />
  );
};

const CartIcon = () => {
  return (
    <Icon icon={"material-symbols:shopping-bag-outline"} fontSize={"1.5rem"} />
  );
};

const SettingsIcon = () => {
  return (
    <Icon
      icon={"material-symbols:settings-outline-rounded"}
      fontSize={"1.5rem"}
    />
  );
};

const LogoutIcon = () => {
  return (
    <Icon
      icon={"material-symbols-light:exit-to-app-rounded"}
      fontSize={"1.5rem"}
    />
  );
};
