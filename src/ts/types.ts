import { type } from "os";

export type Tdom = {
    gallery: HTMLDivElement,
    pagination: HTMLDivElement,
    goUp: HTMLInputElement,
    goTo1: HTMLInputElement,
    goTo2: HTMLInputElement,
    goTo3: HTMLInputElement,
    goTo4: HTMLInputElement,
    goTo5: HTMLInputElement,
    goTo6: HTMLInputElement,
    goDown: HTMLInputElement,
    big: HTMLDivElement,
    close: HTMLButtonElement,
    imgdog: HTMLImageElement
};
export type Tstate = {
    message: Array<string>
};
export type TURL = {
    dogPath: string
};
export type TDogs = {
    data: {
        message: Array<string>,
        status: string
    }
};
export type TConstants = {
    DIV: string,
    INPUT: string,
    CLASS: string,
    GOUP: string,
    GOTO: string,
    GODOWN: string,
    CLICKEDBUTT: string,
    DISABLED: string,
    IMG: string,
    ID: string,
    SRC: string,
    PX: string,
    HIDDEN: string,
    CLICK: string
}