import React, { useRef, useState } from "react";
import "./UserOption.css";
import { MoreHorizIcon } from "../../../icon";
import AvatarInfo from "../AvatarInfo/AvatarInfo";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../auth/authSlice";
import { usePosition } from "../../../helperFunction";
import { useNavigate } from "react-router-dom";

function UserOption() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const { coords, updateCoords } = usePosition();
  const userOptionRef = useRef(null);

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
          <div className="user-option__modal flex-column">
            <div className="modal__header">
              <AvatarInfo variant="horizontal" user={user} />
            </div>
            <div className="modal__content pointer text-md">
              <p
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}
              >
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
