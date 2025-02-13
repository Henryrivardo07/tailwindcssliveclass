import React from "react";
import { Button } from "../ui/Button/Button";

export const Hero: React.FC = () => {
  return (
    <section className="h-96 flex flex-col justify-center items-center text-center bg-gray-200 p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
      <p className="text-lg text-gray-600">Discover the best products with great discounts</p>
      <Button>Shop Now</Button>
    </section>
  );
};
