import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/react";
import MyBox from "../components/MyBox";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../store/authSlice";

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const userProfile = useSelector(selectUserProfile);

  if (!userProfile) {
    return (
      <MyBox alignItems="center" justifyContent="center">
        <Heading> 404 Not found </Heading>
      </MyBox>
    );
  }

  const renderProfile = () => (
    <Flex direction="column" alignSelf="center" alignItems="center">
      <Heading alignSelf="center" marginBottom="1rem">
        Your Profile
      </Heading>
      <Flex>
        <Text alignSelf="start" marginRight="0.5rem">
          First Name:
        </Text>

        <Text
          marginBottom="0.8rem"
          placeholder="First Name"
          children={userProfile.name}
        />
      </Flex>
      <Flex>
        <Text alignSelf="start" marginRight="0.5rem">
          Last Name:
        </Text>
        <Text
          marginBottom="0.8rem"
          placeholder="First Name"
          children={userProfile.surname}
        />
      </Flex>
      <Flex>
        <Text alignSelf="start" marginRight="0.5rem">
          Username:
        </Text>

        <Text
          marginBottom="0.8rem"
          placeholder="First Name"
          children={userProfile.username}
        />
      </Flex>
      <Flex>
        <Text alignSelf="start" marginRight="0.5rem">
          Email address:
        </Text>
        <Text
          marginBottom="0.8rem"
          placeholder="First Name"
          children={userProfile.email}
        />
      </Flex>
      <Flex>
        <Text alignSelf="start" marginRight="0.5rem">
          Role:
        </Text>
        <Text
          marginBottom="0.8rem"
          placeholder="First Name"
          children={userProfile.role}
        />
      </Flex>
      <RouterLink to={"edit"}>
        <Button
          marginY="0.5rem"
          width="30%"
          minWidth="6rem"
          value="Register"
          bg="green.200"
          alignSelf="center"
          // onClick={onClick}
        >
          Edit profile
        </Button>
      </RouterLink>
    </Flex>
  );

  return (
    <MyBox alignSelf="center" height="100vh" padding="25%">
      {renderProfile()}
    </MyBox>
  );
};

export default ProfilePage;
