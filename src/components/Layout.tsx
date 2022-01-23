import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../store/authSlice";
import MyBox from "./MyBox";
import NavigationBar from "./NavigationBar";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const renderNavigationBar = () => (
    <MyBox
      marginBottom="2rem"
      position="fixed"
      alignSelf="start"
      width="calc(100% - 6rem)"
      zIndex={1000}
    >
      <NavigationBar />
    </MyBox>
  );

  return (
    <MyBox
      width="100vw"
      height="100vh"
      padding="3rem"
      paddingBottom="0"
      flex={1}
    >
      {isLoggedIn ? renderNavigationBar() : null}
      <MyBox
        marginTop={isLoggedIn ? "4.5rem" : 0}
        overflowY="scroll"
        paddingBottom="4rem"
      >
        {children}
      </MyBox>
    </MyBox>
  );
};

export default Layout;
