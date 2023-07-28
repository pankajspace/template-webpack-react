import React, { useState } from "react";

import "./index.css";
import appStyles from "./App.css";

const Home = React.lazy(() => import( /* webpackChunkName: "Home" */ './components/home/Home'));
const About = React.lazy(() => import( /* webpackChunkName: "About" */ './components/about/About'));
const Logo = React.lazy(() => import( /* webpackChunkName: "Logo" */ './components/logo/Logo'));

export default function App() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);

  return <>
    <nav className={appStyles.nav}>
      <a onClick={() => { setHome(true); setAbout(false) }} >Home</a>
      <a onClick={() => { setHome(false); setAbout(true) }} >About</a>
    </nav>
    <React.Suspense fallback={<div>Loading...</div>}>
      {home && <Home />}
      {about && <About />}
      <Logo />
    </React.Suspense>
  </>
}