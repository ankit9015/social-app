import React, { useEffect } from "react";
import { removeToast } from "./ToastSlice";
import "./Toast.css";
import { useDispatch } from "react-redux";
import { CloseIcon } from "../../../icon";

function Toast({ id, message, type, timeout }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeToast({ id }));
    }, timeout);

    return () => {
      clearTimeout(timer);
      // dispatch(defaultUsersMessage());
      // dispatch(defaultPostssMessage());
    };
  }, [id, timeout, dispatch]);

  return (
    <div className="toast text-md flex-row">
      {message} <CloseIcon onClick={() => removeToast(id)} fontSize="large" />
    </div>
  );
}

export default Toast;
