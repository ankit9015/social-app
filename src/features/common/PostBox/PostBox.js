import { Avatar } from "@mui/material";
import React from "react";
import {
  BookmarkBorderIcon,
  ChatBubbleOutlineOutlinedIcon,
  FavoriteBorderIcon,
  MoreHorizIcon,
  ShareIcon,
} from "../../../icon";
import "./PostBox.css";

function PostBox() {
  return (
    <div className="post-box flex-row">
      <div className="post-box__left">
        <Avatar className="post-box__avatar" />
      </div>
      <div className="post-box__right flex-column">
        <div className="post-box__header flex-row text-md">
          <h4>Name</h4>
          <h4>@Username</h4>
          <p>Time</p>

          <MoreHorizIcon fontSize="large" />
        </div>
        <div className="post-box__content text-md">
          <p>Lorem Ipsum</p>
        </div>
        <div className="post-box__footer flex-row">
          <FavoriteBorderIcon fontSize="large" />
          <ChatBubbleOutlineOutlinedIcon fontSize="large" />
          <ShareIcon fontSize="large" />
          <BookmarkBorderIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default PostBox;
