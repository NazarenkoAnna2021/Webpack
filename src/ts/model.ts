import { dom } from "./dom"
import { constants } from "./constants"

const valuesToDo: Array<string> = [];

export const writeTask = (newList) => {
    const html = dom.taskItemTemplate
        .replace(constants.tempTitle, newList);
    return htmlToElement(html);
}
const htmlToElement = (html) => {
    const template: HTMLLIElement = document.createElement('li');
    html = html.trim();
    template.innerHTML = html;
    return template;
}

