export type TDom = {
    cells: NodeListOf<Element>;
    toDo: HTMLLIElement;
    newTask: HTMLInputElement;
    addButton: HTMLButtonElement;
    template: string;
};
export type TConstants = {
    dragstart: string;
    dragend: string;
    dragover: string;
    dragenter: string;
    dragleave: string;
    drop: string;
    hide: string;
    hovered: string;
    mousedown: string;
    click: string;
    taskToChange: string;
    template: string
}