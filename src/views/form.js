"use strict";

import { FormData } from "../model/formData";
import { handleFormSubmit } from "../controller/formController";

class FormView {
    _parentElement = document.querySelector("#btn-addTask");

    addHandlerRender(handler) {
        this._parentElement.addEventListener("click", (e) => {
            e.preventDefault();
            handler();
        });
    }

    createFormTitle(titleType, titleText, titleId) {
        const title = document.createElement(titleType);
        title.setAttribute("id", titleId);
        title.innerHTML = titleText;

        return title;
    }

    createLabelWithInput(
        labelText,
        inputId,
        inputType = "text",
        elementClass = "div"
    ) {
        const div = document.createElement("div");
        div.classList.add(elementClass);

        const label = document.createElement("label");
        label.innerHTML = labelText;

        const input = document.createElement("input");
        input.setAttribute("id", inputId);
        input.setAttribute("type", inputType);

        div.appendChild(label);
        div.appendChild(input);

        return div;
    }

    createSelectDropdown(labelText, selectId, options, elementClass = "div") {
        const div = document.createElement("div");
        div.classList.add(elementClass);

        const label = document.createElement("label");
        label.innerHTML = labelText;

        const select = document.createElement("select");
        select.setAttribute("id", selectId);

        options.forEach((option) => {
            const opt = new Option(option.text, option.value);
            select.add(opt);
        });

        div.appendChild(label);
        div.appendChild(select);

        return div;
    }

    addButton(inputType, inputId, inputText) {
        const btn = document.createElement("input");
        btn.setAttribute("id", inputId);
        btn.setAttribute("type", inputType);
        btn.value = inputText;

        return btn;
    }

    closeModal(formDiv, overlay) {
        const closeModalBtn = formDiv.querySelector("#btn-close-modal");
        closeModalBtn.addEventListener("click", () => {
            formDiv.remove();
            overlay.remove();
        });
    }

    generateMarkup() {
        const formDiv = document.createElement("form");
        formDiv.setAttribute("id", "form-div");

        const closeModalBtn = document.createElement("span");
        closeModalBtn.setAttribute("id", "btn-close-modal");
        closeModalBtn.innerHTML = "X";

        const formTitle = this.createFormTitle(
            "h2",
            "Create Task",
            "form-title"
        );

        const choreFormTitle = this.createLabelWithInput(
            "Title",
            "title-chore",
            undefined,
            "chore-title"
        );

        const choreDescriptionDiv = this.createLabelWithInput(
            "Description",
            "description-chore",
            undefined,
            "chore-description"
        );

        const flexDiv = document.createElement("div");

        const dateDiv = this.createLabelWithInput("Date", "date-task", "date");

        const priorityOptions = [
            { text: "Low", value: "low" },
            { text: "Medium", value: "medium" },
            { text: "High", value: "high" },
        ];

        const priorityDiv = this.createSelectDropdown(
            "Priority",
            "options",
            priorityOptions
        );

        const submit = this.addButton("submit", "btn-submit-task", "Submit");

        formDiv.appendChild(closeModalBtn);
        formDiv.appendChild(formTitle);
        formDiv.appendChild(choreFormTitle);
        formDiv.appendChild(choreDescriptionDiv);
        formDiv.appendChild(flexDiv);
        flexDiv.appendChild(dateDiv);
        flexDiv.appendChild(priorityDiv);
        formDiv.appendChild(submit);

        return formDiv;
    }

    // export function showForm() {
    //     if (document.querySelector("#overlay")) return; // Prevent duplicates

    //     const overlay = document.createElement("div");
    //     overlay.setAttribute("id", "overlay");

    //     // Add click event listener to close overlay if clicked outside of form
    //     overlay.addEventListener("click", () => overlay.remove());

    //     // Create and append form
    //     const formDiv = form();
    //     overlay.appendChild(formDiv);

    //     // Prevent overlay from closing when clicking inside the form
    //     formDiv.addEventListener("click", (e) => e.stopPropagation());

    //     // use controller for handling form submission
    //     formDiv.addEventListener("submit", handleFormSubmit);

    //     closeModal(formDiv, overlay);

    //     // Append overlay to the document body
    //     document.body.appendChild(overlay);
    // }
}

export default new FormView();
