import { FormData } from "../model/formData";

export function handleFormSubmit(e) {
    e.preventDefault();

    let taskTitle = document.getElementById("title-chore").value.trim();
    let taskDescription = document
        .getElementById("description-chore")
        .value.trim();
    let taskDate = document.getElementById("date-task").value;
    let taskPriority = document.getElementById("options").value;

    if (!taskTitle || !taskDescription || !taskDate) {
        console.log("Error: All fields are required");
        return;
    }

    // Call the Model to process data
    FormData(taskTitle, taskDescription, taskDate, taskPriority);

    // Clear form and close modal
    document.getElementById("form-div").remove();
    document.getElementById("overlay").remove();
}
