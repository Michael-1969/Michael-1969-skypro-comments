'use strict';

// import {input} from "./baseData.js"
// import {textarea} from "./baseData.js"
import * as data from './baseData.js';

const todayDate = () =>{
        let today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const year = today.getFullYear() -  Number(2000);
        
        const hours = ('0' + today.getHours()).slice(-2);
        const minutes = ('0' + today.getMinutes()).slice(-2);
        
        let newtoday = day + '.' + month + '.' + year + '\t' +  hours + ':' + minutes;

        return newtoday;
}

const initialStateForm = () =>{
   data.input.value = "";
   data.textarea.value = "";

    if(data.input.value === "")
     {
        data.btn.setAttribute('disabled','disabled');
        data.input.classList.add('error-input');
        data.textarea.classList.add('error-textarea');
     }
};

const insertLike = (comment) =>{
   return `like-button ${
                comment.footer.isLiked ? "-active-like" : ""
            }`
}

export {todayDate,initialStateForm,insertLike};