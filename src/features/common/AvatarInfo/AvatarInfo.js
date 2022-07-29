import { Avatar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AvatarInfo.css";

function AvatarInfo(props) {
  const { variant, user, openUserPage } = props;
  const navigate = useNavigate();
  return (
    <div
      className={`avatar-info ${openUserPage ? "pointer" : ""} ${
        variant === "horizontal" ? "flex-row" : "flex-column"
      }`}
      onClick={() => {
        openUserPage && navigate(`../${user.username}`);
      }}
    >
      <Avatar alt="avatar" fontSize="large" src={user?.profileImage} />
      <div className="avatar-info__content">
        <p className="text-md">{user?.firstName + " " + user?.lastName}</p>
        <p className="text-md">@{user?.username}</p>
      </div>
    </div>
  );
}

export default AvatarInfo;
