'use strict';
import * as func from './baseFunctions.js';

const renderUpdateLike = (btnLike,comment,index) =>{
          
        const classString = func.insertLike(comment);
        const likes = `<span class="likes-counter">${comment.footer.like}</span>
                        <button type="button" class="${classString}" data-index="${index}"></button>`;
          
        btnLike.closest('.likes').innerHTML = likes;
};
export {renderUpdateLike};