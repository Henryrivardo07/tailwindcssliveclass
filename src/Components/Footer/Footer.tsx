import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
    </footer>
  );
};
