import { divContent } from "./home";
import img from "../images/chaotic-moo-dang.jpg";

const imgHome = new Image();
imgHome.src = img;
imgHome.style.cssText = "max-width: 70%; height: auto; border-radius: 20px;";

function createEl(h1, description, img) {
    const menuImage = new Image();
    menuImage.src = img;

    const menuDiv = document.createElement("div");
    divContent.appendChild(menuDiv);
    menuDiv.appendChild(menuImage);
    menuDiv.classList.add("menuDiv");

    const menuItemInformation = document.createElement("div");
    menuDiv.appendChild(menuItemInformation);
    menuItemInformation.classList.add("menuTitle");

    const menuTitle = document.createElement("h1");
    menuTitle.innerHTML = h1;
    menuItemInformation.appendChild(menuTitle);

    const menuItemDescription = document.createElement("p");
    menuItemDescription.textContent = description;
    menuItemInformation.appendChild(menuItemDescription);
}

export function menu() {
    divContent.innerHTML = "";

    createEl("Test Menu Item 1", "This is a test", img);
    createEl("Test Menu Item 2", "This is a test", img);
    createEl("Test Menu Item 3", "This is a test", img);
}
