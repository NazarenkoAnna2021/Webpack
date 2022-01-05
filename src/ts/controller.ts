import { dom } from './dom'
import { writeTask } from './model'
import { constants } from "./constants"

const addElem = () => {
    setData(dom.newLi.value);
    const newTaskEl = writeTask(dom.newLi.value);
    dom.toDo.appendChild(newTaskEl);
}
