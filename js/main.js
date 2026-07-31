'use strict';

import { renderAllCommnets } from "./modules/renderAllComments.js";
import { initFormComments} from "./modules/initFormComments.js";

document.addEventListener("DOMContentLoaded", () => {
      
    console.log("Загрузился!");
    renderAllCommnets();
    initFormComments();
     
});