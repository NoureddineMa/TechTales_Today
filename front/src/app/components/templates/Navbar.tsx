"use client";

import React from "react";
import NavList from "../molecules/NavList";
import NavActions from "../molecules/NavActions";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const hideNavbarRoutes = ["/login", "/register"];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  if (shouldHideNavbar) {
    return null;
  }

  return (
    <header>
      <nav>
        <div className="nav-logo font-bold text-2xl">
          <span className="text-red-600">Tech</span>Tales
        </div>
        <NavList />
        <NavActions />
      </nav>
    </header>
  );
}

export default Navbar;
