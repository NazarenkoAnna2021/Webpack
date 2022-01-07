import { dom } from "./dom";
import { constants } from "./constants";

export function addTask():void {
    const taskElement:ChildNode = writeTask(dom.newTask.value);
    dom.toDo.append(taskElement);
}

function writeTask(newList: string): ChildNode {
    const html = dom.template
        .replace(constants.taskToChange, newList)
    return htmlToElement(html);
}

function htmlToElement(html: string): ChildNode {
    const template:HTMLElement = document.createElement(constants.div);
    template.classList.add(constants.listCard, constants.jsCard);
    template.draggable = true;
    template.innerHTML = html;
    return template;
}