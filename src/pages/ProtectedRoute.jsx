// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default ProtectedRoute;

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
