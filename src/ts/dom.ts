import { TDom } from "./types";

export const dom:TDom = {
    cells: document.querySelectorAll('.js-cell'),
    toDo: document.querySelector('#to-do'),
    newTask: document.querySelector('#new-task'),
    addButton: document.querySelector('.add-task__button'),
    template: document.querySelector('#temp').innerHTML
}