import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const location = useLocation();
  const { authToken } = useSelector((state) => state.auth);

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
