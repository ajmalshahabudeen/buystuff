import { Box, Flex, IconButton } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React from "react";

const MobileFooter = () => {
  return (
    <Box className="border-t-2">
      <Flex justifyContent={"space-around"} gap={5} p={2}>
        <Box>
          <IconButton
            variant="ghost"
            icon={<AccountIcon />}
            aria-label="Get Help"
            size={"lg"}
          />
        </Box>
        <Box>
          <IconButton
            variant="ghost"
            icon={<CartIcon />}
            aria-label="Get Help"
            size={"lg"}
          />
        </Box>
        <Box>
          <IconButton
            variant="ghost"
            icon={<SettingsIcon />}
            aria-label="Get Help"
            size={"lg"}
          />
        </Box>
        <Box>
          <IconButton
            variant="ghost"
            icon={<LogoutIcon />}
            aria-label="Get Help"
            size={"lg"}
          />
        </Box>
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
