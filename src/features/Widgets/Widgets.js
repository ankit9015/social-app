import React from "react";
import { FollowList, SearchBox } from "../common";

import "./Widgets.css";

function Widgets() {
  return (
    <aside className="widgets flex-column">
      <SearchBox />
      <FollowList />
    </aside>
  );
}

export default Widgets;
