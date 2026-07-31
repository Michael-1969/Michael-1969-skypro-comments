'use strict';

import {comments} from './model-site.js';
import {list_comments} from './baseData.js';
import * as func from './baseFunctions.js';

const renderOneCommnet = () =>{
    // const list_comments = document.getElementById('list-comments');
    const comment = comments[comments.length-1];
    const classString = func.insertLike(comment);
    const commentHTML = `<li class="comment"data-index="${comments.length-1}">
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
                            <button type="button" class="${classString}" data-index="${comments.length-1}"></button>
                        </div>
                    </div>
                </li>`;
    list_comments.innerHTML += commentHTML;
};

export {renderOneCommnet};