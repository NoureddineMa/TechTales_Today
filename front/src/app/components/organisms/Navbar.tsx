import React from "react";
import NavList from "../molecules/NavList";
import NavActions from "../molecules/NavActions";
import Logo from '../../assets/logo.png'

function Navbar() {
  return (
    <header>
      <nav>
        <div className="nav-logo font-bold text-3xl"><span className="text-red-600">Tech</span>Tales</div>
        <NavList />
        <NavActions />
      </nav>
    </header>
  );
}

export default Navbar;
