import "./index.css";
import homeStyles from "./home.module.css";
import aboutStyles from "./about.module.css";
import webpackLogo from "./img/webpack.png";

console.log('Hello Webpack');

$(".hello").html("Hello Webpack");

$("#image").attr("src", webpackLogo);

$("#css-modules-1").addClass(homeStyles.color);
$("#css-modules-2").addClass(aboutStyles.color);

$("#image").addClass(homeStyles.image);


