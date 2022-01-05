import { TDom } from "./types"
export const dom: TDom = {
    addButton: document.querySelector(".add-button"),
    newLi: document.querySelector(".new-li"),
    toDo: document.querySelector(".to-do"),
    inProgress: document.querySelector(".in-progress"),
    done: document.querySelector(".done"),
    taskItemTemplate: document.getElementById("task-item-template").innerHTML
}