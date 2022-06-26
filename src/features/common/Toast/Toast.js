import React, { useEffect } from "react";
import { defaultUsersMessage } from "../../user/userSlice";
import "./Toast.css";
import { useToast } from "./ToastProvider";
import { useDispatch } from "react-redux";
import { defaultPostssMessage } from "../../posts/postsSlice";
import { CloseIcon } from "../../../icon";

function Toast({ children, id }) {
  const { removeToast } = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
      dispatch(defaultUsersMessage());
      dispatch(defaultPostssMessage());
    };
  }, [id, dispatch, removeToast]);

  return (
    <div className="toast text-md flex-row">
      {children} <CloseIcon onClick={() => removeToast(id)} fontSize="large" />
    </div>
  );
}

export default Toast;
