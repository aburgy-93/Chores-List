import "./styles.css";
import { divContent, homeContent } from "./pages/home.js";
import { menu } from "./pages/menu.js";
import { about } from "./pages/about.js";

homeContent();

const body = document.querySelector("body");
const btnHome = document.querySelector("#btn-home");
const btnMenu = document.querySelector("#btn-menu");
const btnAbout = document.querySelector("#btn-about");

btnHome.addEventListener("click", homeContent);
btnMenu.addEventListener("click", menu);
btnAbout.addEventListener("click", about);

const footer = document.createElement("footer");
body.appendChild(footer);

const footerText = document.createElement("p");
footerText.textContent = "Copyright © Alex Burgy";

footer.appendChild(footerText);
