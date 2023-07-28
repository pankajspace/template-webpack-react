import React from "react";

import "./index.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Logo from "./components/logo/Logo";

export default function App() {
  return <>
    <h3>React App</h3>
    <Home />
    <About />
    <Logo />
  </>
}