


import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ component: Component }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  // If authenticated, render the component, otherwise return null (will be redirected)
  return isAuthenticated ? <Component /> : null;
};

// Add propTypes to validate the `component` prop
ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Expecting a React component
};

export default ProtectedRoute;
