'use strict';

import * as func from './baseFunctions.js';
import * as data from './baseData.js';
import {comments} from './model-site.js';
import { renderOneCommnet } from "./renderOneComment.js";



const initFormComments = () =>{

     func.initialStateForm();

     data.input.addEventListener('input', function() {
            const str = this.value;
            if (/^[а-яА-ЯЁё\.\s]+$/.test(str)) {
               this.value = str.charAt(0).toUpperCase() + str.slice(1);
               data.btn.removeAttribute('disabled');
               data.textarea.readOnly = false;
               if(this.classList.contains('error-input'))
                  this.classList.remove('error-input');
            }
            else{
                 data.btn.setAttribute('disabled','disabled');
                 this.classList.add('error-input');
                 data.textarea.classList.add('error-textarea');
                data.textarea.readOnly = true;
                 return;
            }

             if(str === ""){
                  data.btn.setAttribute('disabled','disabled');
                  this.classList.add('error-input');
                   data.textarea.readOnly = true;
                   data.textarea.classList.add('error-textarea');
               }
               else 
               {
                data.textarea.readOnly = false;
                data.textarea.classList.remove('error-textarea');
               }
      });

      data.textarea.addEventListener('input', function() {
            const str = this.value;
            if (/^[а-яА-ЯЁё\s.,:;?!-]+$/.test(str)  || str === "") {
               this.value = str.charAt(0).toUpperCase() + str.slice(1);
               data.btn.removeAttribute('disabled');
               
               if(this.classList.contains('error-textarea'))
                  this.classList.remove('error-textarea');
            }
            else{
                 data.btn.setAttribute('disabled','disabled');
                 this.classList.add('error-textarea');
                  
                 return;
            }
      });

      data.btn.addEventListener('click',function(event){

        //получение имени из формы
        const user_name = data.input.value;
        
        comments.push({
                header:{
                    name: data.input.value,
                    date_time: func.todayDate(),
                },
                body:{
                    commnet_text: data.textarea.value === "" ? String("Комментарии отсутствуют") : data.textarea.value,
                },
                footer:{
                    like: 0,
                    isLiked: false,
                },
            });

        func.initialStateForm();
        renderOneCommnet();
    });
}

export {initFormComments};