import React from "react";

import "./index.css";
const Home = React.lazy(() => import( /* webpackChunkName: "Home" */ './components/home/Home'));
const About = React.lazy(() => import( /* webpackChunkName: "About" */ './components/about/About'));
const Logo = React.lazy(() => import( /* webpackChunkName: "Logo" */ './components/logo/Logo'));

export default function App() {
  return <>
    <h3>React App</h3>
    <Home />
    <About />
    <Logo />
  </>
}