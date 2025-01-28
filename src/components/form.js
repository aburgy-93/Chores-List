const form = function () {
    // Form
    const formDiv = document.createElement("form");
    formDiv.setAttribute("id", "form-div");

    // close button
    const closeModalBtn = document.createElement("span");
    closeModalBtn.classList.add("btn-close-modal");
    closeModalBtn.innerHTML = "X";
    formDiv.appendChild(closeModalBtn);

    // Create Chore task title
    const formTitle = document.createElement("h2");
    formTitle.setAttribute("id", "form-title");
    formTitle.innerHTML = "Create Task";
    formDiv.appendChild(formTitle);

    // Chore title
    const choreTitleDiv = document.createElement("div");
    choreTitleDiv.classList.add("chore-title");
    formDiv.appendChild(choreTitleDiv);

    const choreTitle = document.createElement("label");
    choreTitle.innerHTML = "Title";

    const titleChore = document.createElement("input");
    titleChore.setAttribute("id", "title-chore");

    choreTitleDiv.appendChild(choreTitle);
    choreTitleDiv.appendChild(titleChore);

    // Description div for chore
    const choreDescriptionDiv = document.createElement("div");
    choreDescriptionDiv.classList.add("chore-description");
    formDiv.appendChild(choreDescriptionDiv);

    const descriptionTitle = document.createElement("label");
    descriptionTitle.innerHTML = "Description";

    const descriptionChore = document.createElement("input");
    descriptionChore.setAttribute("id", "description-chore");

    choreDescriptionDiv.appendChild(descriptionTitle);
    choreDescriptionDiv.appendChild(descriptionChore);

    // create div to hold date and priority
    const flexDiv = document.createElement("div");
    formDiv.appendChild(flexDiv);

    // add date to form
    const dateDiv = document.createElement("div");
    const dateTitle = document.createElement("label");
    dateTitle.innerHTML = "Date";

    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.setAttribute("id", "date-task");

    dateDiv.appendChild(dateTitle);
    dateDiv.appendChild(date);

    // add priority select and options to form
    const priorityDiv = document.createElement("div");
    flexDiv.appendChild(dateDiv);
    flexDiv.appendChild(priorityDiv);
    const priorityTitle = document.createElement("label");
    priorityTitle.innerHTML = "Priority";

    const priority = document.createElement("select");
    priority.add(new Option("Low", "low"));
    priority.add(new Option("Medium", "medium"));
    priority.add(new Option("High", "high"));

    priorityDiv.appendChild(priorityTitle);
    priorityDiv.appendChild(priority);

    // add submit button to form
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "btn-submit-task");
    submit.value = "submit";
    formDiv.appendChild(submit);

    return formDiv;
};

export function showForm() {
    if (document.querySelector("#overlay")) return; // Prevent duplicates

    const overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");

    // Add click event listener to close overlay if clicked outside of form
    overlay.addEventListener("click", (e) => {
        overlay.remove();
    });

    // Create and append form
    const formDiv = form();
    overlay.appendChild(formDiv);

    // Prevent overlay from closing when clicking inside the form
    formDiv.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Append overlay to the document body
    document.body.appendChild(overlay);
}
