import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import FlashSales from "./Components/FlashSales";
import Button from "./Components/Button";
import Category from "./Components/Category";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <FlashSales />
      <Button text="View All Products" />
      <Category/>
    </>
  );
};

export default App;
