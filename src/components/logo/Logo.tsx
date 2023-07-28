import React from "react";

import logoStyles from "./logo.css";
import webpackLogo from "../../img/webpack.png";

export default function Home() {
  return <img src={webpackLogo} className={logoStyles.image} alt="Webpack" />;
}
