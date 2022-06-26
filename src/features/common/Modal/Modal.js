import React, { useEffect } from "react";
import "./Modal.css";
import { debounce } from "lodash";
import Portal from "../../../Portal";

function Modal({ children, coords, updateCoords, position }) {
  const debounceUpdateCoords = updateCoords
    ? debounce(updateCoords, 100)
    : null;

  useEffect(() => {
    if (!debounceUpdateCoords) return;
    window.addEventListener("resize", () => debounceUpdateCoords());
    return () =>
      window.removeEventListener("resize", () => debounceUpdateCoords());
  }, [debounceUpdateCoords]);

  let styleCoords = coords
    ? { top: coords.top, left: coords.left }
    : {
        top: "50%",
        left: "50%",
      };
  return (
    <Portal>
      <div
        style={{
          backgroundColor: coords ? "transparent" : "var(--translucent-gray)",
        }}
        className="modal__backdrop"
      ></div>
      <div
        style={styleCoords}
        className={`modal invisible-scroll ${
          position ? position : coords ? "top" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content">{children}</div>
      </div>
    </Portal>
  );
}

export default Modal;
