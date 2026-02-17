import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import FlashSales from "./Components/FlashSales";
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner/>
      <FlashSales/>
    </>
  );
};

export default App;
