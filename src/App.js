import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import About from "./pages/About.js";
import ContactUs from "./pages/ContactUs.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
