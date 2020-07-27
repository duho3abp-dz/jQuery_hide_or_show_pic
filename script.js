'use strict';

import $ from 'jquery';

$(document).ready(() => {

    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', () => $('.image:even').fadeToggle());
    
    $('.list-item:eq(4)').on('click', () => $('.image:odd').animate({
        opacity: 'toggle',
        height: 'toggle'
    }, 1000));

});

// window.addEventListener('DOMContentLoaded', () => {

//     const btn = document.querySelector('#btn'),
//         allBtn = document.querySelectorAll('.list-item'),
//         allPic = document.querySelectorAll('.image');

//     allBtn.forEach((btn, i) => {
//         if (btn.textContent == 'Третий!') {
//             btn.addEventListener('click', () => allPic.forEach(pic => {
//                 if (pic.getAttribute('alt') == 1) {
//                     pic.style.display !== 'none' ? pic.style.display = 'none' : pic.style.display = '';
//                 }
//             }));
//         }
//         if (i == 4) {
//             btn.addEventListener('click', () => allPic.forEach(pic => {
//                 if (pic.getAttribute('alt') == 2) {
//                     if (pic.style.display !== 'none') {
//                         pic.style.display = 'none';
//                     } else {
//                         pic.style.display = '';
//                     }
//                 }
//             }));
//         }
//     });

//     btn.addEventListener('mouseover', e => {
//         e.preventDefault();

//         btn.classList.add('active');
//     });

//     btn.addEventListener('mouseout', e => {
//         e.preventDefault();

//         btn.classList.remove('active');
//     });

// });