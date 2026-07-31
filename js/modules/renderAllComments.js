'use strict';

import {comments} from './model-site.js';
import {list_comments} from './baseData.js';
//import {likeButton} from './baseData.js';
import {clickLike} from './clickLike.js';
import * as func from './baseFunctions.js';

const renderAllCommnets = () =>{
    list_comments.innerHTML = "";

    const commentsHTML = comments.map((comment,index) =>{
         const classString = func.insertLike(comment);

         return `<li class="comment"data-index="${index}">
                    <div class="comment-header">
                        <div>${comment.header.name}</div>
                        <div>${comment.header.date_time}</div>
                    </div>
                    <div class="comment-body">
                        <div class="comment-text">
                            ${comment.body.commnet_text}
                        </div>
                    </div>
                    <div class="comment-footer">
                        <div class="likes">
                            <span class="likes-counter">${comment.footer.like}</span>
                            <button type="button" class="${classString}" data-index="${index}"></button>
                        </div>
                    </div>
                </li>`
    }).join('');
    list_comments.innerHTML = commentsHTML;
    clickLike();
}

export{renderAllCommnets};