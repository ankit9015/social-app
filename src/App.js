import "./App.css";
import "./utils/utility.css";
import { useState } from "react";
import Header from "./features/Header/Header";
import Sidebar from "./features/Sidebar/Sidebar";
import Widgets from "./features/Widgets/Widgets";
import Router from "./Router/Router";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const { isDarkTheme } = useSelector((state) => state.theme);
  const location = useLocation();
  const forbiddenPaths = ["/login", "/signup"];
  const forbiddenLocation = forbiddenPaths.includes(location.pathname);

  return (
    <div data-theme={isDarkTheme ? "dark" : "light"} className="app">
      <Header setSidebarToggle={setSidebarToggle} />
      <div className="app-body flex-row">
        {!forbiddenLocation && (
          <Sidebar
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
          />
        )}
        <div className="app-main">
          <Router />
        </div>
        {!forbiddenLocation && (
          <aside className="app-body__widgets">
            <Widgets />
          </aside>
        )}
      </div>
    </div>
  );
}

export default App;
