import { Avatar } from "@mui/material";
import React from "react";
import "./AvatarInfo.css";

function AvatarInfo(props) {
  const { variant, user } = props;
  return (
    <div
      className={`avatar-info ${
        variant === "horizontal" ? "flex-row" : "flex-column"
      }`}
    >
      <Avatar
        src="https://picsum.photos/id/1/200/200"
        alt="avatar"
        fontSize="large"
      />
      <div className="avatar-info__content">
        <p className="text-md">{user?.firstName + " " + user?.lastName}</p>
        <p className="text-md">@{user?.username}</p>
      </div>
    </div>
  );
}

export default AvatarInfo;
