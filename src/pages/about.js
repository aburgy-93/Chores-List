import { divContent } from "./home";
import img from "../images/chaotic-moo-dang.jpg";

const imgHome = new Image();
imgHome.src = img;
imgHome.style.cssText = "max-width: 70%; height: auto; border-radius: 20px;";

export function about() {
    divContent.innerHTML = "";

    const aboutText = document.createElement("p");
    aboutText.classList.add("about-text");
    aboutText.innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam " +
        "inventore illum itaque saepe, asperiores rem quos ducimus odit quam " +
        "fuga sit quae obcaecati neque expedita adipisci laudantium, animi ea" +
        "quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam " +
        "inventore illum itaque saepe, asperiores rem quos ducimus odit quam " +
        "fuga sit quae obcaecati neque expedita adipisci laudantium, animi ea quod!";
    divContent.appendChild(aboutText);
    divContent.appendChild(imgHome);
    const address = document.createElement("p");
    address.classList.add("about-adrdess");
    address.innerHTML = `123 Paper St.
    <br>Madison, WI
    <br>Open Daily: 11AM - 10PM 🦛`;
    divContent.appendChild(address);
}
