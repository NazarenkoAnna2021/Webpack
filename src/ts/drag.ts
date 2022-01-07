import { constants } from "./constants";

export let taskToDrag:Element;

export const dragStart = function (): void {
    setTimeout(() => taskToDrag.classList.add(constants.hide), 0)
}

export function dragEnd(): void {
    setTimeout(() => taskToDrag.classList.remove(constants.hide), 0)
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

export function dragDrop(): void {
    this.append(taskToDrag);
    this.classList.remove(constants.hovered)
}

export function dragTask(event): void {
    taskToDrag = event.target.parentNode;
    console.log(taskToDrag)
    event.target.parentNode.addEventListener(constants.dragstart, dragStart);
    event.target.parentNode.addEventListener(constants.dragend, dragEnd);
}