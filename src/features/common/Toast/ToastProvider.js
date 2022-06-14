import React, { createContext, useContext, useState } from "react";
import ToastContainer from "./ToastContainer";

const ToastContext = createContext();
let id = 0;
function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (content) => {
    setToasts([...toasts, { id: id++, content }]);
  };

  const removeToast = (id) => {
    console.log("remove", id);
    setToasts((toasts) => toasts.filter((t) => t.id !== id));
  };
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
}

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
