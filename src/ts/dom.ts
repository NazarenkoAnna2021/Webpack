import { TDom } from "./types"
export const dom: TDom = {
    todoButton: document.querySelector(".to-do__butt"),
    progressButton: document.querySelector(".in-progress__butt"),
    doneButton: document.querySelector(".done__butt"),
    allBox: document.querySelector(".all-box"),
    toDoLi: document.querySelector(".to-do__li"),
    progressLi: document.querySelector(".progress__li"),
    doneLi: document.querySelector(".done__li"),
    toDo: document.querySelector(".to-do"),
    inProgress: document.querySelector(".progress"),
    done: document.querySelector(".isDone"),
    taskItemTemplate: document.getElementById("task-item-template").innerHTML
}