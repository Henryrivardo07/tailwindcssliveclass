import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition" onClick={onClick}>
      {children}
    </button>
  );
};
