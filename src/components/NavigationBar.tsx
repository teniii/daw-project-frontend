import React from "react";
import { Flex, Link, Text } from "@chakra-ui/layout";
import { useNavbar } from "../hooks/useNavbar";

interface INavigationBar {}

const NavigationBar: React.FC<INavigationBar> = () => {
  const { menuItems } = useNavbar();
  //   const menuItems: { title: string; onPress: () => void }[] = [];
  return (
    <Flex
      width="90vw"
      justifyContent="space-around"
      alignItems="center"
      borderRadius="full"
      background="gray.500"
      paddingY="1.5rem"
      alignSelf="center"
      fontWeight="semibold"
    >
      {menuItems.map((item) => (
        <Link key={`navbar-item-${item.title}`} onPress={item.onPress}>
          {item.title}
        </Link>
      ))}
    </Flex>
  );
};

export default NavigationBar;
