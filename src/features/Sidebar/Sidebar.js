import React, { useState } from "react";
import {
  HomeOutlinedIcon,
  RocketOutlinedIcon,
  BookmarkBorderIcon,
  AccountCircleOutlinedIcon,
  ArrowBackIcon,
  AddIcon,
  PostAddIcon,
} from "../../icon";

import AvatarInfo from "../common/AvatarInfo/AvatarInfo";
import "./Sidebar.css";
import NavOption from "../common/NavOption/NavOption";
import UserOption from "../common/UserOption/UserOption";
import { useDispatch, useSelector } from "react-redux";
import { Modal, PostsModalEditor } from "../common";
import { useWindowSize } from "../../helperFunction";
import { logout } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";

function Sidebar({ sidebarToggle, setSidebarToggle }) {
  const { width } = useWindowSize();
  const { user } = useSelector((state) => state.auth);
  let isSmallScreen = (() => width < 500)();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <aside
      className={`sidebar flex-column invisible-scroll ${
        sidebarToggle ? "" : "sidebar--hide"
      }`}
    >
      {isSmallScreen && (
        <>
          <div
            className="sidebar__header flex-row"
            onClick={() => setSidebarToggle(false)}
          >
            <h1 className="logo text-md">
              <PostAddIcon fontSize="large" /> Post-It
            </h1>
            <ArrowBackIcon fontSize="large" />
          </div>
          <div className="sidebar__user-info--small-screen">
            <AvatarInfo variant="vertical" user={user} />
          </div>
        </>
      )}
      <NavOption
        onClick={() => setSidebarToggle(false)}
        link="/home"
        Icon={HomeOutlinedIcon}
        title="Home"
      />
      <NavOption
        onClick={() => setSidebarToggle(false)}
        link="explore"
        Icon={RocketOutlinedIcon}
        title="Explore"
      />

      <NavOption
        onClick={() => setSidebarToggle(false)}
        link="bookmarks"
        Icon={BookmarkBorderIcon}
        title="Bookmarks"
      />
      <NavOption
        onClick={() => setSidebarToggle(false)}
        link={`${user?.username}`}
        Icon={AccountCircleOutlinedIcon}
        title="Profile"
      />
      {isSmallScreen && (
        <div
          className="sidebar__logout-option text-md"
          onClick={() => {
            dispatch(logout());
            navigate("/");
            setSidebarToggle(false);
          }}
        >
          Logout
        </div>
      )}
      {!isSmallScreen && (
        <button
          className="sidebar__create-button button button-primary"
          onClick={() => setShowModal((prev) => !prev)}
        >
          <AddIcon className="icon" fontSize="large" />
          <span className="text-md">Create Post</span>
          {showModal && (
            <Modal>
              <PostsModalEditor closeEditor={() => setShowModal(false)} />
            </Modal>
          )}
        </button>
      )}
      {!isSmallScreen && <UserOption />}
    </aside>
  );
}

export default Sidebar;
