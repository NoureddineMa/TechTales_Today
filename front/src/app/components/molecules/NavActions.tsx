import React from "react";
import Button from "../atoms/Button";

function NavActions() {
  return (
    <div className="nav-actions">
      <Button content="Login" isPrimary={true} />
      <Button content="Sign up" isPrimary={false} />
    </div>
  );
}

export default NavActions;
