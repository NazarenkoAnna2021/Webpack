import '../css/style.css'
import "core-js/stable";
import "regenerator-runtime/runtime";
import { writeList, openUser, closeInfo } from './functions';
import { dom } from './dom'

writeList();

dom.mainArea.addEventListener('click', openUser);
dom.userInfo.addEventListener('click', closeInfo)