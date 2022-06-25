import React, { useEffect, useRef, useState } from "react";
import "./Tooltip.css";
import { usePosition } from "../../../helperFunction";
import Portal from "../../../Portal";
import { debounce } from "lodash";

function Tooltip({ title, children }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const childRef = useRef();
  const { coords, updateCoords } = usePosition();
  const debounceUpdateCoords = debounce(() => updateCoords, 100);

  const mouseOver = () => {
    setShowTooltip(true);
    updateCoords(childRef.current);
  };

  const mouseLeave = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    const childCopy = childRef.current;
    if (showTooltip) {
      window.addEventListener("resize", () => debounceUpdateCoords(childCopy));

      return () =>
        window.removeEventListener("resize", () =>
          debounceUpdateCoords(childCopy)
        );
    }
  }, [debounceUpdateCoords, showTooltip]);

  return (
    <>
      <span ref={childRef} onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
        {children}
      </span>
      {showTooltip && (
        <Portal>
          <div
            style={{ position: "absolute", top: coords.top, left: coords.left }}
            className="tooltip text-md"
          >
            {title}
          </div>
        </Portal>
      )}
    </>
  );
}

export default Tooltip;
