import { useState } from "react";

function usePosition() {
  const [coords, setCoords] = useState({});
  const updateCoords = (el) => {
    if (el) {
      const rect = el.getBoundingClientRect();
      setCoords({
        left: rect.x,
        top: rect.top,
        height: rect.height,
        width: rect.width,
      });
    }
  };
  return { coords, updateCoords };
}

export default usePosition;
