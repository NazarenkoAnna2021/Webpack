import { type } from "os"
import { object } from "../../node_modules/joi/lib/index"

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
}
export type Tstate = {
    message: Array<string>
}
export type TDogs = {
    data: {
        message: Array<string>,
        status: string
    }
}