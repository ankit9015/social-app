import { useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

function Portal({ children }) {
  const portalRoot = document.getElementById("portal-root");
  const el = document.createElement("div");

  const { isDarkTheme } = useSelector((state) => state.theme);

  useEffect(() => {
    portalRoot.appendChild(el);
    return () => portalRoot.removeChild(el);
  }, [el, portalRoot]);

  useLayoutEffect(() => {
    const el = document.getElementById("portal-root");
    el.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
    return () => el.removeAttribute("data-theme");
  }, [isDarkTheme]);

  return createPortal(children, el);
}

export default Portal;
