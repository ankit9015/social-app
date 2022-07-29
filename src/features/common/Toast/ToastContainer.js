import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import Toast from "./Toast";

const style = {
  position: "absolute",
  top: "10rem",
  right: "0rem",
  zIndex: "99",
};

function ToastContainer() {
  const portalRoot = document.getElementById("portal-root");
  const { toasts } = useSelector((state) => state.toast);
  return createPortal(
    <div style={style} className="toast-container">
      {toasts.map((item) => (
        <Toast
          key={item?.id}
          id={item?.id}
          message={item?.message}
          type={item?.type}
          timeout={item?.timeout}
        />
      ))}
    </div>,
    portalRoot
  );
}

export default ToastContainer;
