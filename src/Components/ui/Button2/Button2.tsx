import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button2 = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="iniStyleButton" onClick={onClick}>
      {children}
    </button>
  );
};
