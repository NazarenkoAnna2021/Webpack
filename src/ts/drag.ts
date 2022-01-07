import { dom } from "./dom";
import { constants } from "./constants";

export let taskToDrag:Element;

export const dragStart = function (): void {
    setTimeout(() => this.classList.add(constants.hide), 0)
}

export function dragEnd(): void {
    setTimeout(() => this.classList.remove(constants.hide), 0)
}

export function dragOver(event: { preventDefault: () => void; }): void {
    event.preventDefault();
}

export function dragEnter(event: { preventDefault: () => void; }): void {
    event.preventDefault();
    this.classList.add(constants.hovered);
}

export function dragLeave(): void {
    this.classList.remove(constants.hovered);
}

export function dragDrop(task): void {
    const divElement = 
    console.log(task)
    this.append(task);
    this.classList.remove(constants.hovered)
}

export function dragTask(event) {
    event.target.addEventListener(constants.dragstart, dragStart);
    event.target.addEventListener(constants.dragend, dragEnd);
    taskToDrag = event.target;
}