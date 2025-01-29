function createFormTitle(titleType, titleText, titleId) {
    const title = document.createElement(titleType);
    title.setAttribute("id", titleId);
    title.innerHTML = titleText;

    return title;
}

function createLabelWithInput(
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

function createSelectDropdown(
    labelText,
    selectId,
    options,
    elementClass = "div"
) {
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

function addButton(inputType, inputId, inputText) {
    const btn = document.createElement("input");
    btn.setAttribute("id", inputId);
    btn.setAttribute("type", inputType);
    btn.value = inputText;

    return btn;
}

function closeModal(formDiv, overlay) {
    const closeModalBtn = formDiv.querySelector(".btn-close-modal");
    closeModalBtn.addEventListener("click", () => {
        formDiv.remove();
        overlay.remove();
    });
}

const form = function () {
    // Form
    const formDiv = document.createElement("form");
    formDiv.setAttribute("id", "form-div");

    // close button
    const closeModalBtn = document.createElement("span");
    closeModalBtn.classList.add("btn-close-modal");
    closeModalBtn.innerHTML = "X";

    // Create Chore task title
    const formTitle = createFormTitle("h2", "Create Task", "form-title");
    formDiv.appendChild(formTitle);

    // Chore title
    const choreFormTitle = createLabelWithInput(
        "Title",
        "title-chore",
        undefined,
        "chore-title"
    );

    // Description div for chore
    const choreDescriptionDiv = createLabelWithInput(
        "Description",
        "description-chore",
        undefined,
        "chore-description"
    );

    // create div to hold date and priority
    const flexDiv = document.createElement("div");

    // add date to form
    const dateDiv = createLabelWithInput("Date", "date-task", "date");

    // add priority select and options to form
    const priorityOptions = [
        { text: "Low", value: "low" },
        { text: "Medium", value: "medium" },
        { text: "High", value: "high" },
    ];

    const priorityDiv = createSelectDropdown(
        "Priority",
        "options",
        priorityOptions
    );

    // add submit button to form
    const submit = addButton("submit", "btn-submit-task", "Submit");

    formDiv.appendChild(closeModalBtn);
    formDiv.appendChild(choreFormTitle);
    formDiv.appendChild(choreDescriptionDiv);
    formDiv.appendChild(flexDiv);
    flexDiv.appendChild(dateDiv);
    flexDiv.appendChild(priorityDiv);
    formDiv.appendChild(submit);

    return formDiv;
};

export function showForm() {
    if (document.querySelector("#overlay")) return; // Prevent duplicates

    const overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");

    // Add click event listener to close overlay if clicked outside of form
    overlay.addEventListener("click", () => overlay.remove());

    // Create and append form
    const formDiv = form();
    overlay.appendChild(formDiv);

    // Prevent overlay from closing when clicking inside the form
    formDiv.addEventListener("click", (e) => e.stopPropagation());

    closeModal(formDiv, overlay);

    // Append overlay to the document body
    document.body.appendChild(overlay);
}
