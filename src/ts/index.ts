import '/css/style.css'
import { dom } from './dom'
import * as drag from './drag'
import { constants } from './constants'

// dom.card.forEach(element => {
//     element.addEventListener(constants.dragstart, drag.dragStart);
//     element.addEventListener(constants.dragend, drag.dragEnd);
// });
dom.card.addEventListener('mouseover', drag.dragTask)
dom.cells.forEach(element => {
    element.addEventListener(constants.dragover, drag.dragOver);
    element.addEventListener(constants.dragenter, drag.dragEnter);
    element.addEventListener(constants.dragleave, drag.dragLeave);
    element.addEventListener(constants.drop, () => drag.dragDrop(drag.taskToDrag));
});