'use strict';

import {comments} from './model-site.js';
import {list_comments} from './baseData.js';
import * as func from './baseFunctions.js';
import {renderUpdateLike} from "./renderUpdateLike.js";



export const clickLike = () => {
    
    list_comments.addEventListener('click',(event) =>{
        let indButton;

        if (event.target.matches('.like-button')){
             event.preventDefault();
            
            indButton = event.target.dataset.index;
            const indComment = event.target.closest('.comment').dataset.index;
            if(indButton === indComment)
            {
                if(comments[indButton].footer.isLiked)
                {
                    comments[indButton].footer.isLiked = false;
                    comments[indButton].footer.like -= 1;
                }
                else{
                    comments[indButton].footer.isLiked = true;
                    comments[indButton].footer.like += 1;
                }
            }
        }
        else event.stopPropagation();

        renderUpdateLike(event.target,comments[indButton],indButton);
        
    },{capture: false});
    
};