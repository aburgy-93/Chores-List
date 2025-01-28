import "./styles.css";
import { showForm } from "./components/form";

const loadContent = () => {
    const addTask = document.querySelector("#btn-addTask");

    addTask.addEventListener("click", (e) => {
        showForm();
    });
};

export default loadContent;
