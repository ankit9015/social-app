import "./App.css";
import "./utils/utility.css";
import { useLayoutEffect, useState } from "react";
import Header from "./features/Header/Header";
import Sidebar from "./features/Sidebar/Sidebar";
import Widgets from "./features/Widgets/Widgets";
import Router from "./Router/Router";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ToastContainer from "./features/common/Toast/ToastContainer";
import { useWindowSize } from "./helperFunction";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const { isDarkTheme } = useSelector((state) => state.theme);
  const location = useLocation();
  const forbiddenPaths = ["/login", "/signup", "/", "*"];
  const forbiddenLocation = forbiddenPaths.includes(location.pathname);
  const { width: windowWidth } = useWindowSize();

  useLayoutEffect(() => {
    const el = document.getElementById("app");
    el.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
    return () => el.removeAttribute("data-theme");
  }, [isDarkTheme]);

  return (
    <div className="app" id="app">
      <ToastContainer />
      <Header
        forbiddenLocation={forbiddenLocation}
        setSidebarToggle={setSidebarToggle}
      />
      <div className="app-body flex-row">
        {!forbiddenLocation && (
          <Sidebar
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
          />
        )}
        <div className="app-main invisible-scroll">
          <Router />
        </div>
        {!forbiddenLocation && windowWidth > 900 && (
          <aside className="app-body__widgets">
            <Widgets />
          </aside>
        )}
      </div>
    </div>
  );
}

export default App;
