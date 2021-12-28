import { state, constants, RegExp } from './constants';
import { dom } from './dom';
import { TDogs, Tstate } from './types';
import { URL } from './URLs';
const axios = require('axios');
import "core-js/stable";
import "regenerator-runtime/runtime";

let position: string = constants.GOTO.concat('1');
let previous: string = null;
let next: string = constants.GOTO.concat('2');

export async function main(): Promise<void> {
    state.message = await getDogs();
    showDogs(state);
}

async function getDogs(): Promise<Array<string>> {
    const dogs: TDogs = await axios.get(URL.dogPath)
    return dogs.data.message;
}

function showDogs(dogs: Tstate): void {
    dogs.message.forEach((element, index) => {
        const newImg: HTMLElement = document.createElement(constants.DIV);
        newImg.innerHTML = `<img src="${element}" alt="" id="${index}" class="partGaleery">`
        dom.gallery.appendChild(newImg);
    });
}

export function toClicked(event): void {
    if (event.target && event.target.nodeName == constants.INPUT) {
        const inputname: string = event.target.getAttribute(constants.CLASS);
        if (position != inputname && inputname != constants.GOUP && inputname != constants.GODOWN) {
            calcValues(inputname);
        }
    }
}

export function goToPrevious(): void {
    if (parseInt(previous.replace(RegExp, "")) != 0) {
        calcValues(previous);
    }
}

export function goToNext(): void {
    if (parseInt(next.replace(RegExp, "")) <= 6) {
        calcValues(next);
    }
}

function calcValues(inputname: string): void {
    dom[inputname].classList.add(constants.CLICKEDBUTT);
    dom[inputname].setAttribute(constants.DISABLED, constants.DISABLED);
    dom[position].classList.remove(constants.CLICKEDBUTT);
    dom[position].removeAttribute(constants.DISABLED,constants.DISABLED);
    position = inputname;
    const number: number = parseInt(inputname.replace(RegExp, ""));
    previous = constants.GOTO.concat(String(number - 1));
    next = constants.GOTO.concat(String(number + 1));
    document.getElementById(findPage(number)).scrollIntoView();
}

function findPage(number: number): string {
    switch (number) {
        case 1: return '0';
        case 2: return '6';
        case 3: return '12';
        case 4: return '18';
        case 5: return '24';
        case 6: return '30';
        default: return null;
    }
}

export function showBigImg(event): void {
    if (event.target && event.target.nodeName == constants.IMG) {
        const img: HTMLElement = document.getElementById(event.target.getAttribute(constants.ID));
        dom.imgdog.src = img.getAttribute(constants.SRC);
        dom.imgdog.style.width = (dom.imgdog.clientWidth + 500) + constants.PX;
        dom.imgdog.style.height = (dom.imgdog.clientHeight + 500) + constants.PX;
        closeOpenBigDog();
    }

}

export function closeOpenBigDog(): void {
    dom.big.classList.toggle(constants.HIDDEN);
}