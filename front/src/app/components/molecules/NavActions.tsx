
"use client"

import React from "react";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";



function NavActions() {
  
  const router = useRouter()
  
  const redirectToLogin = () => {
    router.push('/login')
  }

  const redirectToRegister = () => {
    router.push('/register')
  }

  return (
    <div className="nav-actions">
      <Button onClick={redirectToLogin} content="Login" isPrimary={true} />
      <Button onClick={redirectToRegister} content="Sign up" isPrimary={false} />
    </div>
  );
}

export default NavActions;
