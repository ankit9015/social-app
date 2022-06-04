import { Routes, Route } from "react-router-dom";

import React from "react";
import { Bookmarks, Explore, HomePage } from "../features";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="explore" element={<Explore />} />
      <Route path="bookmarks" element={<Bookmarks />} />
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
