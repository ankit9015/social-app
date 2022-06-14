import React, { useEffect, useRef, useState } from "react";
import "./Toast.css";
import { useToast } from "./ToastProvider";

function Toast({ children, id }) {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [id]);

  return <div className="toast text-md">{children}</div>;
}

export default Toast;
