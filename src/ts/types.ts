import { type } from "os";

export type TDom = {
    card: Element;
    cells: NodeListOf<Element>;
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
}