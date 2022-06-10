import { useEffect } from "react";
import { createPortal } from "react-dom";

function Portal({ children }) {
  const portalRoot = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    portalRoot.appendChild(el);
    return () => portalRoot.removeChild(el);
  }, [el, portalRoot]);

  return createPortal(children, el);
}

export default Portal;
