import "/css/style.css";
import { main, toClicked, goToPrevious, goToNext, showBigImg, closeOpenBigDog } from "./functions";
import { dom } from "./dom";
import { constants } from "./constants";
import "core-js/stable";
import "regenerator-runtime/runtime";

main();
dom.pagination.addEventListener(constants.CLICK, toClicked);
dom.goUp.addEventListener(constants.CLICK, goToPrevious);
dom.goDown.addEventListener(constants.CLICK, goToNext);
dom.gallery.addEventListener(constants.CLICK, showBigImg);
dom.close.addEventListener(constants.CLICK, closeOpenBigDog);