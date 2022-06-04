import "./App.css";
import "./utils/utility.css";
import { useState } from "react";
import Header from "./features/Header/Header";
import Sidebar from "./features/Sidebar/Sidebar";
import Widgets from "./features/Widgets/Widgets";
import Router from "./Router/Router";
import { useSelector } from "react-redux";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const { isDarkTheme } = useSelector((state) => state.theme);
  return (
    <div data-theme={isDarkTheme ? "dark" : "light"} className="app">
      <Header setSidebarToggle={setSidebarToggle} />
      <div className="app-body flex-row">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <div className="app-main">
          <Router />
        </div>
        <aside className="app-body__widgets">
          <Widgets />
        </aside>
      </div>
    </div>
  );
}

export default App;
