import '/css/style.css'
import { dom } from './dom'
import * as drag from './drag'
import {addTask} from './addNewTasks'
import { constants } from './constants'

dom.cells.forEach(element => {
    element.addEventListener(constants.mousedown, drag.dragTask)
    element.addEventListener(constants.dragover, drag.dragOver);
    element.addEventListener(constants.dragenter, drag.dragEnter);
    element.addEventListener(constants.dragleave, drag.dragLeave);
    element.addEventListener(constants.drop, drag.dragDrop);
});

dom.addButton.addEventListener(constants.click, addTask)