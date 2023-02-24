import { useState } from "react";
import "./App.css";
import { StarAdminBody } from "./components/StarAdminBody/StarAdminBody";
import { StarAdminHeader } from "./components/StarAdminHeader/StarAdminHeader";
import { StarAdminSideNavbar } from "./components/StarAdminSideNavbar/StarAdminSideNavbar";

function App() {

  const [isSideNav,setIsSideNav] = useState(false)

  const SideNavbar = () => {
    setIsSideNav(!isSideNav)
  }

  return (
    <div className="app">
      <div className="star-admin-side-nav-contaier">
        <StarAdminSideNavbar isSideNav = {isSideNav}/>
      </div>
      <div>
        <StarAdminHeader SideNavbar = {SideNavbar} isSideNav = {isSideNav}/>
        <StarAdminBody />
      </div>
    </div>
  );
}

export default App;
