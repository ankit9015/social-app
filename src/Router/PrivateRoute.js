import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const location = useLocation();
  const authToken = JSON.parse(localStorage.getItem("authToken"));

  return (
    <div>
      {authToken && authToken !== "" ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location.pathname }} replace />
      )}
    </div>
  );
}

export default PrivateRoute;
