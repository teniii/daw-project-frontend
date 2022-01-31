/* eslint-disable no-unreachable */
import React, { useState } from "react";
import { Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import MyBox from "../components/MyBox";
import { login } from "../api/apiCalls";
import { useDispatch } from "react-redux";
import { reduxLogin } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = () => {
  const [username, setUsername] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(" == IN THE LOGIN PAGE");

  const onLoginPress = () => {
    console.log(" == IN THE LOGIN BUTTON FCT: ", username, password);

    if (!username || !password) return;

    dispatch(reduxLogin("1234"));
    navigate("/");
    return;

    // fetch("https://localhost:5001/api/movie/")
    //   // fetch("https://api.npms.io/v2/search?q=react")
    //   .then((resp) => console.log("The response: ", resp))
    //   .catch((err) => console.log(" == ce cacat mai ai acum> ?", err));

    // return;

    login(username ?? "", password ?? "")
      .then((token) => {
        dispatch(reduxLogin(token));
        console.log(" === Token: ", token);
      })
      .then(() => navigate("/route1"))
      .catch((e) => console.log(" == Error while logging in: ", e));
  };

  return (
    <MyBox padding="4rem" height="100vh">
      {/* <NavigationBar /> */}
      <MyBox alignItems="center" justifyContent="center" marginTop="10rem">
        <Flex
          direction="column"
          width="min-content"
          minWidth="25rem"
          // alignSelf="center"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Heading alignSelf="center" marginBottom="1rem">
            LOGIN
          </Heading>
          {/* <MyBox> */}
          <Text alignSelf="start" marginLeft="0.5rem">
            Username
          </Text>
          <Input
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
            onChange={(val) => setPassword(val.target.value)}
            type="password"
            placeholder="Password"
          />
          {/* </MyBox> */}
          <Flex
            alignItems="center"
            justifyContent="space-between"
            marginY="0.5rem"
            width="50%"
          >
            {/* <RouterLink to={"/route1"}> */}
            {/* <button onClick={onLoginPress}>Login</button> */}
            <Button
              width="30%"
              minWidth="5rem"
              value="Login"
              bg="green.400"
              onClick={onLoginPress}
            >
              Login
            </Button>
            {/* </RouterLink> */}
            <RouterLink to={"/register"} style={{ width: "min-content" }}>
              <Button
                width="30%"
                minWidth="6rem"
                value="Register"
                bg="orange.200"
              >
                Register
              </Button>
            </RouterLink>
          </Flex>
          {/* <RouterLink to={"/register"}> */}
          <Link href={"/register"}>
            <Text minWidth="5rem">Forgot Password?</Text>
          </Link>
          {/* </RouterLink> */}
        </Flex>
      </MyBox>
    </MyBox>
  );
};

export default SignInPage;
