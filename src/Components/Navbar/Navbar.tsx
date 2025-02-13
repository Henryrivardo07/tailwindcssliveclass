import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">E-Commerce</h1>
      <ul className="flex space-x-6">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Shop</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};
