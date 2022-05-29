import { Routes, Route } from "react-router-dom";

import React from "react";
import { HomePage } from "../features";

function Router() {
  return (
    <Routes>
      <Route path="/" element={HomePage} />
      <Route path="" element={{}} />
    </Routes>
  );
}

export default Router;
