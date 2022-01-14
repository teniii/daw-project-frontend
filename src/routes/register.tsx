import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/react";
import MyBox from "../components/MyBox";

interface RegisterProps {}

const RegisterPage: React.FC<RegisterProps> = () => {
  const [firstName, setFirstName] = useState<string | null>();
  const [lastName, setLastName] = useState<string | null>();
  const [username, setUsername] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();

  const buttonDisabled =
    firstName?.trim() === "" ||
    lastName?.trim() === "" ||
    username?.trim() === "" ||
    password?.trim() === "";

  return (
    <MyBox alignSelf="center" height="100vh" padding="25%">
      <Flex
        direction="column"
        width="min-content"
        minWidth="25rem"
        alignSelf="center"
        alignItems="center"
      >
        <Heading alignSelf="center" marginBottom="1rem">
          REGISTER
        </Heading>

        <Text alignSelf="start" marginLeft="0.5rem">
          First Name
        </Text>
        <Input
          marginBottom="0.8rem"
          placeholder="First Name"
          onChange={(val) => {
            setFirstName(val.target.value);
          }}
        />

        <Text alignSelf="start" marginLeft="0.5rem">
          Last Name
        </Text>
        <Input
          marginBottom="0.8rem"
          placeholder="Last Name"
          onChange={(val) => {
            setLastName(val.target.value);
          }}
        />

        <Text alignSelf="start" marginLeft="0.5rem">
          Username
        </Text>
        <Input
          marginBottom="0.8rem"
          placeholder="Username"
          onChange={(val) => {
            setUsername(val.target.value);
            console.log(" === value: ", val.target.value);
          }}
        />

        <Text alignSelf="start" marginLeft="0.5rem">
          Password
        </Text>
        <Input
          marginBottom="0.8rem"
          onChange={(val) => setPassword(val.target.value)}
          type="password"
          placeholder="Password"
        />

        <RouterLink to={"/"}>
          <Button
            marginY="0.5rem"
            width="30%"
            minWidth="6rem"
            value="Register"
            bg="green.200"
            alignSelf="center"
            disabled={buttonDisabled}
          >
            Register
          </Button>
        </RouterLink>
      </Flex>
    </MyBox>
  );
};

export default RegisterPage;
