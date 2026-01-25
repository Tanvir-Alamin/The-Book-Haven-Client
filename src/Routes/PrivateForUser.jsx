import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";
import Loader from "../Component/Loader";

const PrivateForUser = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return <Navigate to="/home"></Navigate>;
  }

  return children;
};

export default PrivateForUser;
