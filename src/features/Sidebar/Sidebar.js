import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  HomeOutlinedIcon,
  RocketOutlinedIcon,
  BookmarkBorderIcon,
  NotificationsNoneIcon,
  AccountCircleOutlinedIcon,
  MoreHorizIcon,
  ArrowBackIcon,
} from "../../icon";
import NavOption from "../NavOption/NavOption";
import AvatarInfo from "../common/AvatarInfo/AvatarInfo";
import "./Sidebar.css";

function Sidebar({ sidebarToggle, setSidebarToggle }) {
  const { width } = useWindowSize();

  const showSmallerOptions = () => {
    return width < 1200 && width >= 500;
  };

  return (
    <aside
      className={`sidebar flex-column ${sidebarToggle ? "" : "sidebar--hide"}`}
    >
      <div
        className="sidebar__header flex-row"
        onClick={() => setSidebarToggle(false)}
      >
        <h1 className="text-lg">Logo</h1>
        <ArrowBackIcon fontSize="large" />
      </div>
      <NavOption Icon={HomeOutlinedIcon} title="Home" />
      <NavOption Icon={RocketOutlinedIcon} title="Explore" />
      <NavOption Icon={BookmarkBorderIcon} title="Bookmarks" />
      <NavOption Icon={NotificationsNoneIcon} title="Notifications" />
      <NavOption Icon={AccountCircleOutlinedIcon} title="Profile" />
      <button className="sidebar__create-button button button-primary">
        <span className="text-xl icon">+</span>
        <span className="text-md">Create Post</span>
      </button>
      <div className="sidebar__user-option flex-row">
        <AvatarInfo variant="horizontal" />
        <MoreHorizIcon className="icon" fontSize="large" />
      </div>
    </aside>
  );
}

export default Sidebar;
