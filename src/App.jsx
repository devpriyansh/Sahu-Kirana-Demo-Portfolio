import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductSection from "./components/ProductSection";
import USPSection from "./components/USPSection";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsListingPage from "./components/ProductsListingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      {/* <USPSection /> */}
      <Footer />
    </>
  );
}

export default App;
