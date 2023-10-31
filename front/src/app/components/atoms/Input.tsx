import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  className?: string;
  isDisabled?: boolean;
  onInput?: () => void;
}

function Input({
  placeholder,
  type,
  className,
  isDisabled,
  onInput,
}: InputProps) {
  return (
    <div className={`input_container ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        onInput={onInput}
      />
    </div>
  );
}

export default Input;
