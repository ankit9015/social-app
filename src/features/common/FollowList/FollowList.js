import React from "react";
import "./FollowList.css";
import AvatarInfo from "../AvatarInfo/AvatarInfo";

function FollowList() {
  return (
    <div className="follow-list flex-column">
      <div className="follow-list__header flex-row">
        <h6 className="text-md">Who to follow</h6>
        <span className="text-md">Show More</span>
      </div>
      <ul>
        <li className="follow-list__account">
          <AvatarInfo variant="horizontal" />
          <span className="follower__badge text-sm">Follows you</span>
          <button className="follow-button button button-secondary text-md">
            Follow
          </button>
        </li>
      </ul>
    </div>
  );
}

export default FollowList;
