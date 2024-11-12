import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"; // Make sure to import Routes and Route
import { AuthProvider, useAuth } from "./context/AuthContext";
import EventList from "./pages/EventList/EventList";
import Login from "./pages/Login";
import EventDetails from "./pages/EventDetails/EventDetails";
import FilterEvents from "./pages/FilterEvents/FilterEvents";

const ProtectedRoute = ({ component: Component }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]); // Add `isAuthenticated` and `navigate` to the dependency array

  // If authenticated, render the component, otherwise return null (will be redirected)
  return isAuthenticated ? <Component /> : null;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/events/:id" element={<EventDetails/>} />
      <Route path="/find-events" element={<FilterEvents/>} />
      <Route path="/" element={<ProtectedRoute component={EventList} />} />
    </Routes>
  );
}

export default App;
