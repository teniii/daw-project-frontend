import React, { useState } from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/react";

interface RegisterProps {}

const RegisterPage: React.FC<RegisterProps> = () => {
  const [username, setUsername] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();

  return (
    <Box
      width="100%"
      padding="4rem"
      alignContent="center"
      justifyContent="center"
    >
      <Heading> REGISTER</Heading>
      <Input onChange={(val) => setUsername(val.target.textContent)} />
      <Input onChange={(val) => setPassword(val.target.textContent)} />
      <Flex>
        <RouterLink to={"/route1"}>
          <Button width="30%" minWidth="5rem" value="Login" />
        </RouterLink>
        <RouterLink to={"/login"}>
          <Button width="30%" minWidth="6rem" value="Register" />
        </RouterLink>
      </Flex>
      {/* <RouterLink to={"/register"}> */}
      <Link href={"/register"}>
        <Text width="30%" minWidth="5rem">
          Forgot Password
        </Text>
      </Link>
      {/* </RouterLink> */}
    </Box>
  );
};

export default RegisterPage;
