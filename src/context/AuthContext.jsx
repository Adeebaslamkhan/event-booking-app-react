import React, { createContext, useContext, useState } from "react";

// Create a Context for authentication
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

// Auth Provider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Mock login (You can add logic to check username/password)
    if (username === "user" && password === "password") {
      setIsAuthenticated(true);
      setUser({ username });
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
