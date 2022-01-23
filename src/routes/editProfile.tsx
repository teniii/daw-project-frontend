import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import MyBox from "../components/MyBox";
import { useDispatch, useSelector } from "react-redux";
import { reduxEditProfile, selectUserProfile } from "../store/authSlice";

interface ProfilePageProps {}

const EditProfilePage: React.FC<ProfilePageProps> = () => {
  const userProfile = useSelector(selectUserProfile)!;
  const dispatch = useDispatch();

  const userProfileCopy = { ...userProfile };

  const onClick = () => {
    dispatch(reduxEditProfile(userProfileCopy));
  };

  if (!userProfile) {
    return (
      <MyBox alignItems="center" justifyContent="center">
        <Heading> 404 Not found </Heading>
      </MyBox>
    );
  }

  const renderProfile = () => (
    <Flex
      direction="column"
      alignSelf="center"
      alignItems="center"
      width="max-content"
    >
      <Heading alignSelf="center" marginBottom="1rem">
        Your Profile
      </Heading>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="0.8rem"
        width="23rem"
      >
        <Text
          textAlign="center"
          marginRight="0.5rem"
          noOfLines={1}
          bg="red"
          minWidth="max-content"
        >
          First Name:
        </Text>

        <Input
          width="16rem"
          placeholder="First Name"
          defaultValue={userProfile.name}
          onChange={(event) => {
            userProfileCopy.name = event?.target.value;
          }}
        />
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="0.8rem"
        width="23rem"
      >
        <Text marginRight="0.5rem" noOfLines={1} minWidth="max-content">
          Last Name:
        </Text>
        <Input
          width="16rem"
          placeholder="Last Name"
          defaultValue={userProfile.surname}
          onChange={(event) => {
            userProfileCopy.surname = event.target.value;
          }}
        />
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="0.8rem"
        width="23rem"
      >
        <Text marginRight="0.5rem" noOfLines={1} minWidth="max-content">
          Username:
        </Text>

        <Input
          width="16rem"
          placeholder="Username"
          defaultValue={userProfile.username}
          onChange={(event) => {
            userProfileCopy.username = event.target.value;
          }}
        />
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="0.8rem"
        width="23rem"
      >
        <Text marginRight="0.5rem" noOfLines={1} minWidth="max-content">
          Email address:
        </Text>
        <Input
          width="16rem"
          placeholder="Email"
          defaultValue={userProfile.email}
          onChange={(event) => {
            userProfileCopy.email = event.target.value;
          }}
        />
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="0.8rem"
        width="23rem"
      >
        <Text marginRight="0.5rem" noOfLines={1} minWidth="max-content">
          Role:
        </Text>
        <Input
          width="16rem"
          placeholder="Role"
          defaultValue={userProfile.role}
          readOnly
        />
      </Flex>
      <RouterLink to={"/profile"}>
        <Button
          marginY="0.5rem"
          width="min-content"
          paddingX="1rem"
          value="Register"
          bg="green.200"
          alignSelf="center"
          onClick={onClick}
        >
          Finish editing
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

export default EditProfilePage;
