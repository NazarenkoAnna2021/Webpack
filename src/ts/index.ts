import '/css/style.css'
import { dom } from './dom'
import * as drag from './drag'
import { constants } from './constants'

dom.card.addEventListener(constants.dragstart, drag.dragStart);
dom.card.addEventListener(constants.dragend, drag.dragEnd);
dom.cells.forEach(element => {
    element.addEventListener(constants.dragover, drag.dragOver);
    element.addEventListener(constants.dragenter, drag.dragEnter);
    element.addEventListener(constants.dragleave, drag.dragLeave);
    element.addEventListener(constants.drop, drag.dragDrop);
});