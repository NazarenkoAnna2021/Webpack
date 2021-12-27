import { state, constants, RegExp } from './constants';
import { dom } from './dom';
import { TDogs, Tstate } from './types';
import { URL } from 'URL';
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
    dom[inputname].classList.add('clickedButt');
    dom[inputname].setAttribute('disabled', 'disabled');
    dom[position].classList.remove('clickedButt');
    dom[position].removeAttribute('disabled', 'disabled');
    position = inputname;
    const number: number = parseInt(inputname.replace(/\D+/g, ""));
    previous = 'goTo'.concat(String(number - 1));
    next = 'goTo'.concat(String(number + 1));
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
    if (event.target && event.target.nodeName == "IMG") {
        const img: HTMLElement = document.getElementById(event.target.getAttribute('id'));
        dom.imgdog.src = img.getAttribute('src');
        dom.imgdog.style.width = (dom.imgdog.clientWidth + 500) + "px";
        dom.imgdog.style.height = (dom.imgdog.clientHeight + 500) + "px";
        dom.big.classList.remove('hidden');
    }

}

export function closeBigDog(): void {
    dom.big.classList.add('hidden');
}