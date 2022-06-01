import React from "react";
import "./NavOption.css";

function NavOption({ Icon, title }) {
  return (
    <div
      data-tooltip={title}
      className={`nav-option flex-row flex-align-center`}
    >
      {Icon && <Icon className="nav-option__icon " fontSize="large" />}
      <h4 className="nav-option__title text-md ">{title}</h4>
    </div>
  );
}

export default NavOption;
