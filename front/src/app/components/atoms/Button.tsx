import React from "react";

interface ButtonProps {
  content: string;
  className?: string;
  isSubmit?: boolean;
  isPrimary: boolean;
  isDisabled?: boolean;
  onClick?: () => void | undefined;
}

function Button({
  content,
  className,
  isSubmit,
  isPrimary,
  isDisabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={`btn ${
        isPrimary ? "btn-primary" : "btn-secondary"
      } ${className}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default Button;
