import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const destination = location.pathname;

  if (!user) {
    return <Navigate to="/login" state={destination}></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
