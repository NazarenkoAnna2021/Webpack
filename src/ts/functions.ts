import { dom } from "./dom"
import { constants } from "./constants"

const valuesToDo: Array<string> = ['1111111', '22222222', '333333333333'];
const valuesInProgress: Array<string> = ['1111111', '22222222', '333333333333'];
const valuesdone: Array<string> = ['1111111', '22222222', '333333333333'];
let dragingEl:HTMLLIElement;
const writeTask = (newList: string) => {
    const html = dom.taskItemTemplate
        .replace(constants.tempTitle, newList)
        .replace(constants.tempItemid, '0');
    return htmlToElement(html);
}
const htmlToElement = (html: string) => {
    let template: HTMLLIElement = document.createElement('li');
    html = html.trim();
    template.innerHTML = html;
    return template;
}

export const addElem = (element: HTMLDivElement, value: string) => {
    const newTaskEl = writeTask(value);
    element.appendChild(newTaskEl);
}

export const writeTodo = () => {
    dom.toDo.innerHTML = constants.none;
    valuesToDo.forEach((value) => {
        const newTaskEl = writeTask(value);
        dom.toDo.appendChild(newTaskEl);
    });
}
export const writeProgress = () => {
    dom.inProgress.innerHTML = constants.none;
    valuesInProgress.forEach((value) => {
        const newTaskEl = writeTask(value);
        dom.inProgress.appendChild(newTaskEl);
    });
}
export const writeDone = () => {
    dom.done.innerHTML = constants.none;
    valuesdone.forEach((value) => {
        let newTaskEl = writeTask(value);
        dom.done.appendChild(newTaskEl);
    });
}

dom.toDo.ondragover = allowDrop;
function allowDrop(event: { preventDefault: () => void; }) {event.preventDefault()};

function drag(event: { dataTransfer: { setData: (arg0: string, arg1: any) => void; }; target: { id: any; }; }){ 
       event.dataTransfer.setData('class', event.target.id);
    }