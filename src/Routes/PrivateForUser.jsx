import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";

const PrivateForUser = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/home"></Navigate>;
  }

  return children;
};

export default PrivateForUser;
