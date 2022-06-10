import React, { useEffect } from "react";
import "./Modal.css";
import { debounce } from "lodash";
import Portal from "../../../Portal";
import { useSelector } from "react-redux";

function Modal({ children, coords, updateCoords, position }) {
  const { isDarkTheme } = useSelector((state) => state.theme);
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
    ? { ...coords }
    : {
        top: "10rem",
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
        data-theme={isDarkTheme ? "dark" : "light"}
        style={styleCoords}
        className={`modal ${position ? position : coords ? "top" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content">{children}</div>
      </div>
    </Portal>
  );
}

export default Modal;
