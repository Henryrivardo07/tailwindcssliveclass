import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Homepage/HomePage";

export const Home: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};
