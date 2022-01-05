import '/css/style.css'
import { dom } from './dom'
import { addElem, writeTodo, writeProgress, writeDone } from './functions'

writeTodo();
writeProgress();
writeDone();

dom.todoButton.addEventListener('click', () => addElem(dom.toDo, dom.toDoLi.value));
dom.progressButton.addEventListener('click', () => addElem(dom.inProgress, dom.progressLi.value));
dom.doneButton.addEventListener('click', () => addElem(dom.done, dom.doneLi.value));
