import React, { useCallback } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  HomeOutlinedIcon,
  RocketOutlinedIcon,
  BookmarkBorderIcon,
  NotificationsNoneIcon,
  AccountCircleOutlinedIcon,
  MoreHorizIcon,
  ArrowBackIcon,
  SearchIcon,
} from "../../icon";
import NavOption from "../NavOption/NavOption";
import AvatarInfo from "../common/AvatarInfo/AvatarInfo";
import "./Sidebar.css";
import UserOption from "../UserOption/UserOption";

function Sidebar({ sidebarToggle, setSidebarToggle }) {
  const { width } = useWindowSize();
  let isSmallScreen = (() => width < 500)();

  return (
    <aside
      className={`sidebar flex-column ${sidebarToggle ? "" : "sidebar--hide"}`}
    >
      {isSmallScreen && (
        <>
          <div
            className="sidebar__header flex-row"
            onClick={() => setSidebarToggle(false)}
          >
            <h1 className="text-md">Logo</h1>
            <ArrowBackIcon fontSize="large" />
          </div>
          <div className="sidebar__user-info--small-screen">
            <AvatarInfo variant="vertical" />
          </div>
        </>
      )}
      <NavOption Icon={HomeOutlinedIcon} title="Home" />
      <NavOption Icon={RocketOutlinedIcon} title="Explore" />
      {isSmallScreen && <NavOption Icon={SearchIcon} title="Search" />}
      <NavOption Icon={BookmarkBorderIcon} title="Bookmarks" />
      <NavOption Icon={NotificationsNoneIcon} title="Notifications" />
      <NavOption Icon={AccountCircleOutlinedIcon} title="Profile" />
      {isSmallScreen && (
        <div className="sidebar__logout-option text-md">Logout</div>
      )}
      {!isSmallScreen && (
        <button className="sidebar__create-button button button-primary">
          <span className="text-xl icon">+</span>
          <span className="text-md">Create Post</span>
        </button>
      )}
      {!isSmallScreen && <UserOption />}
    </aside>
  );
}

export default Sidebar;
