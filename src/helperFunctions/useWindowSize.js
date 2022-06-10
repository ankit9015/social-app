import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    window.addEventListener("resize", () =>
      setWindowSize({ height: window.innerHeight, width: window.innerWidth })
    );
  }, []);
  return { ...windowSize };
}

export default useWindowSize;
