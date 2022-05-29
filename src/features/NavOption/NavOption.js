import React from "react";
import "./NavOption.css";

function NavOption({ Icon, title }) {
  return (
    <div className={`nav-option flex-row flex-align-center text-xl`}>
      {Icon && <Icon className="nav-option__icon " fontSize="inherit" />}
      <h4 className="nav-option__title text-lg ">{title}</h4>
    </div>
  );
}

export default NavOption;
