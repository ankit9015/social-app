import { Routes, Route } from "react-router-dom";
import React from "react";
import {
  Bookmarks,
  Explore,
  HomePage,
  Login,
  Post,
  Signup,
  ProfilePage,
  ProfileEdit,
  LandingPage,
  PageNotFound,
  SearchResults,
} from "../features";
import PrivateRoute from "./PrivateRoute";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/explore"
        element={
          <PrivateRoute>
            <Explore />
          </PrivateRoute>
        }
      />
      <Route
        path="/bookmarks"
        element={
          <PrivateRoute>
            <Bookmarks />
          </PrivateRoute>
        }
      />
      <Route
        path="/:username"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile-edit"
        element={
          <PrivateRoute>
            <ProfileEdit />
          </PrivateRoute>
        }
      />
      <Route
        path="/:username/:postId"
        element={
          <PrivateRoute>
            <Post />
          </PrivateRoute>
        }
      />
      <Route
        path="/search"
        element={
          <PrivateRoute>
            <SearchResults />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
