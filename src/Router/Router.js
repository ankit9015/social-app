import { Routes, Route } from "react-router-dom";

import React from "react";
import { Bookmarks, Explore, HomePage, Login, Signup } from "../features";
import PrivateRoute from "./PrivateRoute";

function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<div>landing page</div>} /> */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="explore"
        element={
          <PrivateRoute>
            <Explore />
          </PrivateRoute>
        }
      />
      <Route
        path="bookmarks"
        element={
          <PrivateRoute>
            <Bookmarks />
          </PrivateRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route
        path="*"
        element={
          <div>
            <div className="text-lg">Page not found</div>
          </div>
        }
      />
    </Routes>
  );
}

export default Router;
