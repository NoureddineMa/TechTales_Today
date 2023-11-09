import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  className?: string;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  placeholder,
  type,
  className,
  isDisabled,
  icon,
  value,
  onChange,
}: InputProps) {
  return (
    <div className={`input_container ${className}`}>
      <div className="icon-container">{icon}</div>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
