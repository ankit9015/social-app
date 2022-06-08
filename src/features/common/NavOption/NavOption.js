import React from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../../helperFunction";

import "./NavOption.css";

function NavOption({ Icon, title, link, onClick }) {
  const { width: screenWidth } = useWindowSize();
  const navStyle = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: isActive ? "var(--primary-color)" : "inherit",
    };
  };
  return (
    <NavLink
      style={navStyle}
      to={link}
      data-tooltip={title}
      className={`nav-option flex-row flex-align-center ${
        screenWidth < 500 ? "text-md" : "text-lg"
      }`}
      onClick={onClick}
    >
      {Icon && <Icon className="nav-option__icon " fontSize="inherit" />}
      <h4 className="nav-option__title ">{title}</h4>
    </NavLink>
  );
}

export default NavOption;
