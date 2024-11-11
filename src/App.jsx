// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Switch>
//           <Route path="/login" component={Login} />
//           <ProtectedRoute path="/" exact component={EventList} />
//         </Switch>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes instead of Switch
// import { AuthProvider } from "./context/AuthContext";
// import EventList from "./pages/EventList/EventList";
// import Login from "./pages/Login";
// import ProtectedRoute from "./pages/ProtectedRoute";
// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {" "}
//           {/* Use Routes to wrap all route definitions */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<ProtectedRoute component={EventList} />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

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
