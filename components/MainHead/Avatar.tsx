"use client";
import { poppins } from "@/config/fonts";
import signOutAction from "@/utils/authActions/signOutAction";
import { GetSession } from "@/utils/session";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const Avatar = () => {
  const [session, setSession] = React.useState<any>();
  const route = useRouter();

  useEffect(() => {
    fetchSession();
  }, []);

  const fetchSession = async () => {
    const session = await GetSession();
    setSession(session);
  };
  return (
    <Box className={poppins.className}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<UserIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem
            icon={<AccountIcon />}
            onClick={() => route.push("/shop/account")}
          >
            Account
          </MenuItem>
          <MenuItem
            icon={<CartIcon />}
            onClick={() => route.push("/shop/cart")}
          >
            Cart
          </MenuItem>
          <MenuItem
            icon={<SettingsIcon />}
            onClick={() => route.push("/shop/settings")}
          >
            Settings
          </MenuItem>
          {session?.user?.email ? (
            <MenuItem icon={<LogoutIcon />} onClick={() => signOutAction()}>
              Sign Out
            </MenuItem>
          ) : (
            <MenuItem
              icon={<LogoutIcon />}
              onClick={() => route.push("/login")}
            >
              Sign In
            </MenuItem>
          )}
          {/* <MenuItem icon={<LogoutIcon />} onClick={() => signOutAction()}>
            Sign Out
          </MenuItem> */}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Avatar;

const UserIcon = () => {
  return <Icon icon={"material-symbols:account-circle-full"} />;
};

const AccountIcon = () => {
  return (
    <Icon
      icon={"material-symbols:shield-person-outline-rounded"}
      fontSize={"1.5rem"}
    />
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
