import React, { useRef, useState } from "react";
import "./UserOption.css";
import { MoreHorizIcon } from "../../../icon";
import AvatarInfo from "../AvatarInfo/AvatarInfo";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../auth/authSlice";
import { usePosition } from "../../../helperFunction";

function UserOption() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const { coords, updateCoords } = usePosition();
  const userOptionRef = useRef(null);

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
      <AvatarInfo variant="horizontal" user={user} />
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
              <AvatarInfo variant="horizontal" user={user} />
            </div>
            <div className="modal__content text-md">
              <p>Profile</p>
              <p onClick={() => dispatch(logout())}>
                Log out @{user?.username}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default UserOption;
