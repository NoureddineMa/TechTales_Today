import React from "react";
import NavList from "../molecules/NavList";
import NavActions from "../molecules/NavActions";
function Navbar() {
  return (
    <header>
      <nav>
        <div className="nav-logo">Riven</div>
        <NavList />
        <NavActions />
      </nav>
    </header>
  );
}

export default Navbar;
