import React from "react";
import { Button } from "../Button/Button";
// import { Button2 } from "../Button2/Button2";

export const CardProduct: React.FC = () => {
  return (
    <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 text-center shadow-md transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg w-[300px] h-[300px]">
      <img src="https://via.placeholder.com/250x140" alt="Product" className="w-full h-36 object-cover rounded-md transition-transform duration-300 hover:scale-105" />
      <h2 className="text-lg font-bold text-purple-800 mt-2">Elegant Sneakers</h2>
      <p className="text-gray-600 text-sm mt-1">Comfort & Style in One</p>
      <span className="text-purple-700 font-semibold text-md block mt-2">$129.99</span>
      <Button>Add to Cart</Button>
      {/* <Button2>Ini Style button 2</Button2> */}
    </div>
  );
};
