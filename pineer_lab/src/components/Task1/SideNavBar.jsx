import React from "react";
import { Box, VStack, Text, Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdBusiness,
  MdAttachMoney,
  MdTrendingUp,
  MdHistory,
  MdAccountBalanceWallet,
  MdNotifications,
  MdSettings,
  MdLiveHelp,
} from "react-icons/md";

const SideNavBar = ({ activeItem, setActiveItem }) => {
  const navigationItems = [
    { label: "Home", icon: MdHome },
    { label: "Organization", icon: MdBusiness },
    { label: "Assets", icon: MdAttachMoney },
    { label: "Trade", icon: MdTrendingUp },
    { label: "History", icon: MdHistory },
    { label: "Wallet", icon: MdAccountBalanceWallet },
    { label: "", icon: null }, // Spacer
    { label: "", icon: null }, // Spacer
    { label: "", icon: null }, // Spacer
    { label: "", icon: null }, // Spacer

    { label: "Notification", icon: MdNotifications },
    { label: "Support", icon: MdLiveHelp },
    { label: "Setting", icon: MdSettings },
  ];

  return (
    <VStack
      align="flex-start"
      spacing={4}
    //   borderTop={"10px"}
      borderTopRightRadius={"10px"}
      borderBottomRightRadius={"10px"}
      bg="#1A1E1C"
      width="100%"
    //   border={"2px solid red"}
    >
      {navigationItems.map((item, index) => (
        <Box
          key={index}
          p={2}
          borderRadius="md"
          color={activeItem === item.label ? "#35BF30" : "white"}
          cursor="pointer"
          onClick={() => setActiveItem(item.label)}
          display="flex"
          alignItems="center"
          width="100%" // Set full width
          boxShadow={
            activeItem === item.label
              ? "0px 4px 6px rgba(84, 82, 82, 0.999)"
              : "none"
          }
        >
          {item.icon && <Icon as={item.icon} mr={2} fontSize="20px" />}
          <Text>{item.label}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default SideNavBar;
