"use client";

import React from "react";
import NavList from "../molecules/NavList";
import { usePathname } from "next/navigation";
import SocialMedia from "../molecules/SocialMedia";
import Link from "next/link";

function Footer() {
  const pathname = usePathname();

  const hideFooterRoutes = ["/login", "/register"];
  const shouldHideFooter = hideFooterRoutes.includes(pathname);

  if (shouldHideFooter) {
    return null;
  }

  return (
    <footer>
      <section className="navigation-section">
        <div className="nav-logo font-bold text-2xl text-red-600">
          TechTales
        </div>
        <NavList />
        <SocialMedia />
      </section>
      <section className="copyright-section">
        <p>Copyright © TechTales, 2023 All rights reserved!</p>
        <div className="links-container">
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Terms of Use</Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
