import Chore from "./Chore";
const chore = new Chore();

export function FormData(taskTitle, taskDescription, taskDate, taskPriority) {
    chore.createChore(taskTitle, taskDescription, taskDate, taskPriority);
}
