import React, { useRef, useState } from "react";
import "./UserOption.css";
import { MoreHorizIcon } from "../../../icon";
import AvatarInfo from "../AvatarInfo/AvatarInfo";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";

function UserOption() {
  const [showModal, setShowModal] = useState(false);
  const [coords, setCoords] = useState({});
  const userOptionRef = useRef(null);
  const updateCoords = (el) => {
    if (el) {
      const rect = el.getBoundingClientRect();
      setCoords({
        left: rect.x,
        top: rect.top,
      });
    }
  };

  const { isDarkTheme } = useSelector((state) => state.theme);
  return (
    <div
      ref={userOptionRef}
      className="user-option flex-row"
      onClick={() => {
        setShowModal((prev) => !prev);
        updateCoords(userOptionRef.current);
      }}
    >
      <AvatarInfo variant="horizontal" />
      <MoreHorizIcon className="icon" fontSize="large" />
      {showModal && (
        <Modal
          coords={{ left: coords.left + "px", top: coords.top + "px" }}
          updateCoords={() => updateCoords(userOptionRef.current)}
          position="top-right"
        >
          <div
            data-theme={isDarkTheme ? "dark" : "light"}
            className="user-option__modal flex-column"
          >
            <div className="modal__header">
              <AvatarInfo variant="horizontal" />
            </div>
            <div className="modal__content text-md">
              <p>Profile</p>
              <p>Log out @username</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default UserOption;
