import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../store/authSlice";

const PrivateRoute: React.FC = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    // Show the element only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route element={isLoggedIn ? children : <Navigate to="/login" />} />
  );
};

export default PrivateRoute;
