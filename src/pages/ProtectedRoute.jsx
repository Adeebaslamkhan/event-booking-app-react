import React from "react";
import { Route, Navigate } from "react-router-dom"; // Use Navigate instead of Redirect
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {


  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to="/login" /> // Use Navigate for redirect
        )
      }
    />
  );
};

export default ProtectedRoute;
