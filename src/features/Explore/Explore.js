import React, { useState } from "react";
import { addToast } from "../common/Toast/ToastSlice";
import { useDispatch } from "react-redux";
import { useToast } from "../common/Toast/ToastProvider";

function Explore() {
  const [toast, setToast] = useState("");
  // const dispatch = useDispatch();
  const { addToast } = useToast();
  return (
    <div>
      <input
        type="text"
        value={toast}
        onChange={(e) => setToast(e.target.value)}
      />
      <button
        onClick={() => {
          if (toast) {
            addToast(toast);
            setToast("");
          }
        }}
      >
        add
      </button>
    </div>
  );
}

export default Explore;
