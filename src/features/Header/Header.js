import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DarkModeIcon,
  LightModeOutlinedIcon,
  MenuIcon,
  PostAddIcon,
} from "../../icon";
import { toggleTheme } from "../theme/themeSlice";
import { SearchBox } from "../common";

import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header({ setSidebarToggle, forbiddenLocation }) {
  const { isDarkTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="flex-row text-md">
        {!forbiddenLocation && (
          <span
            className="header__menu--open"
            onClick={() => setSidebarToggle(true)}
          >
            <MenuIcon fontSize="large" />
          </span>
        )}
        <p className="logo text-md pointer" onClick={() => navigate("/home")}>
          <PostAddIcon fontSize="large" /> Post-It
        </p>
        {!forbiddenLocation && (
          <div className="header__search">
            <SearchBox />
          </div>
        )}
        <button
          className="header__theme-button pointer"
          onClick={() => dispatch(toggleTheme())}
        >
          {isDarkTheme ? (
            <LightModeOutlinedIcon fontSize="large" />
          ) : (
            <DarkModeIcon fontSize="large" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
