import React from "react";
import { Flex, Link } from "@chakra-ui/layout";
import { useNavbar } from "../hooks/useNavbar";

interface INavigationBar {}

const NavigationBar: React.FC<INavigationBar> = () => {
  const { menuItems } = useNavbar();

  return (
    <Flex
      width="100%"
      justifyContent="space-around"
      alignItems="center"
      borderRadius="full"
      background="gray.500"
      paddingY="1.5rem"
      alignSelf="center"
      fontWeight="semibold"
    >
      {menuItems.map((item) => (
        <Link key={`navbar-item-${item.title}`} onClick={item.onPress}>
          {item.title}
        </Link>
      ))}
    </Flex>
  );
};

export default NavigationBar;
