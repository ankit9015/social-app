import React, { useEffect } from "react";
import { removeToast } from "./ToastSlice";
import "./Toast.css";
import { useDispatch } from "react-redux";
import { CloseIcon } from "../../../icon";

const TOAST_TYPE = {
  SUCCESS: { backgroundColor: "#c8e6c9", color: "#1b5e20" },
  ERROR: { backgroundColor: "#ffcdd2", color: "#b71c1c" },
  INFO: { backgroundColor: "#90caf9", color: "#2962ff" },
};

function Toast({ id, message, type, timeout }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeToast({ id }));
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [id, timeout, dispatch]);

  return (
    <div
      className="toast text-md flex-row"
      style={TOAST_TYPE[type.toUpperCase()]}
    >
      {message} <CloseIcon onClick={() => removeToast(id)} fontSize="large" />
    </div>
  );
}

export default Toast;
