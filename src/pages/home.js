import img from "../images/chaotic-moo-dang.jpg";

const imgHome = new Image();
imgHome.src = img;
imgHome.style.cssText = "max-width: 70%; height: auto; border-radius: 20px;";

export const divContent = document.querySelector("#content");

export function homeContent() {
    divContent.innerHTML = "";

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("divTitle");
    divContent.appendChild(titleDiv);

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Moo Dang Eats";
    titleDiv.appendChild(title);

    const paraContent = document.createElement("p");
    paraContent.innerHTML = "Moo dang be eatin'";
    titleDiv.appendChild(paraContent);

    divContent.appendChild(imgHome);
}
