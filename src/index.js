import "./index.css";
import homeStyles from "./home.css";
import aboutStyles from "./about.css";
import webpackLogo from "./img/webpack.png";

console.log('Hello Webpack', homeStyles);

$(".hello").html("Hello Webpack");

$("#image").attr("src", webpackLogo);

$("#css-modules-1").addClass(homeStyles.color);
$("#css-modules-2").addClass(aboutStyles.color);

$("#image").addClass(homeStyles.image);

$("#outer").addClass(homeStyles.outer);
$("#inner").addClass(homeStyles.inner);






