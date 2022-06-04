import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  HomeOutlinedIcon,
  RocketOutlinedIcon,
  BookmarkBorderIcon,
  NotificationsNoneIcon,
  AccountCircleOutlinedIcon,
  ArrowBackIcon,
  SearchIcon,
  AddIcon,
} from "../../icon";

import AvatarInfo from "../common/AvatarInfo/AvatarInfo";
import "./Sidebar.css";
import NavOption from "../common/NavOption/NavOption";
import UserOption from "../common/UserOption/UserOption";

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
      <NavOption link="/" Icon={HomeOutlinedIcon} title="Home" />
      <NavOption link="explore" Icon={RocketOutlinedIcon} title="Explore" />
      {isSmallScreen && (
        <NavOption link="search" Icon={SearchIcon} title="Search" />
      )}
      <NavOption link="bookmarks" Icon={BookmarkBorderIcon} title="Bookmarks" />
      <NavOption
        link="notifications"
        Icon={NotificationsNoneIcon}
        title="Notifications"
      />
      <NavOption
        link="profile"
        Icon={AccountCircleOutlinedIcon}
        title="Profile"
      />
      {isSmallScreen && (
        <div className="sidebar__logout-option text-md">Logout</div>
      )}
      {!isSmallScreen && (
        <button className="sidebar__create-button button button-primary">
          <AddIcon className="icon" fontSize="large" />
          <span className="text-md">Create Post</span>
        </button>
      )}
      {!isSmallScreen && <UserOption />}
    </aside>
  );
}

export default Sidebar;
