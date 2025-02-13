import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { CardProduct } from "../../Components/ui/CardProduct/CardProduct";
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </section>
      <Footer />
    </div>
  );
};
