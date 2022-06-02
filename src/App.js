import "./App.css";
import "./utils/utility.css";
import { useState } from "react";
import Header from "./features/Header/Header";
import Sidebar from "./features/Sidebar/Sidebar";
import Widgets from "./features/Widgets/Widgets";
import Router from "./Router/Router";

// import Router from "./Router/outer";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="app">
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
