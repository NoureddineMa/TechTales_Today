"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function NavList() {
  const pathname = usePathname();

  return (
    <ul className="nav-list">
      <li>
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`link ${pathname === "/Blogs" ? "active" : ""}`}
          href="/Blogs"
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          className={`link ${pathname === "/About" ? "active" : ""}`}
          href="/About"
        >
          About us
        </Link>
      </li>
      <li>
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Contact us
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
