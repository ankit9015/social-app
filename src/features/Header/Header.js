import React from "react";
import { MenuIcon } from "../../icon";

import { SearchBox } from "../common";

import "./Header.css";

function Header({ setSidebarToggle }) {
  return (
    <header className="header">
      <div className="flex-row text-md">
        <span
          className="header__menu--open"
          onClick={() => setSidebarToggle(true)}
        >
          <MenuIcon fontSize="large" />
        </span>
        <p className="header__logo">Logo</p>
        <div className="header__search">
          <SearchBox />
        </div>
      </div>
    </header>
  );
}

export default Header;
