"use strict";

import formView from "../views/form.js";
import { handleFormSubmit } from "./formController.js";

console.log("Script loaded");

const test = function () {
    console.log("CLICKED");
};

const showForm = function () {
    if (document.querySelector("#overlay")) return; // Prevent duplicates

    const overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");

    // Add click event listener to close overlay if clicked outside of form
    overlay.addEventListener("click", () => overlay.remove());

    // Create and append form
    const formDiv = formView.generateMarkup();
    overlay.appendChild(formDiv);

    // Prevent overlay from closing when clicking inside the form
    formDiv.addEventListener("click", (e) => e.stopPropagation());

    // use controller for handling form submission
    formDiv.addEventListener("submit", handleFormSubmit);

    // closeModal(formDiv, overlay);

    // Append overlay to the document body
    document.body.appendChild(overlay);
};

const init = function () {
    formView.addHandlerRender(showForm);
};

init();

export default init;
