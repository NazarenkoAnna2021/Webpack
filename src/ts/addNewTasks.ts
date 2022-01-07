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
    const template:HTMLTemplateElement = document.createElement(constants.template);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}