import React, { useEffect } from "react";
import "./Modal.css";
import { debounce } from "lodash";
import Portal from "../../../Portal";

function Modal({ children, coords, updateCoords }) {
  const debounceUpdateCoords = debounce(updateCoords, 100);

  useEffect(() => {
    window.addEventListener("resize", () => debounceUpdateCoords());
    return () =>
      window.removeEventListener("resize", () => debounceUpdateCoords());
  }, []);

  let styleCoords = { left: coords.left + "px", top: coords.top + "px" };
  return (
    <Portal>
      <div className="modal__backdrop"></div>
      <div
        style={styleCoords}
        className="modal__wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content">{children}</div>
      </div>
    </Portal>
  );
}

export default Modal;
