import React from "react";
import { Flex, FlexProps } from "@chakra-ui/layout";

// Chakra-ui has a component Named Box, which is a div that doesn't accept flex props
// Made my own component, that accepts the flex props, being a flex-box with direction column
const MyBox: React.FC<FlexProps> = ({ children, ...props }) => (
  <Flex direction="column" {...props}>
    {children}
  </Flex>
);

export default MyBox;
