'use strict';
import * as func from './baseFunctions.js';



const comments = [
    {
        header:{
            name: "Глеб Фокин",
            date_time: func.todayDate()
        },
        body:{
            commnet_text: "Это будет первый комментарий на этой странице",
        },
        footer:{
            like: 0,
            isLiked: false,
        },
    },
    
    {
        header:{
            name: "Варвара Н.",
            date_time: func.todayDate(),
        },
        body:{
            commnet_text: "Мне нравится как оформлена эта страница! ❤",
        },
        footer:{
            like: 0,
            isLiked: false,
        },
    },
    
];

export {comments};
        