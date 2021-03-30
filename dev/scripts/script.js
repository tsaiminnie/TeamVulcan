// "use strict";

const body = document.body;
const buttonMenu = document.getElementById('button-menu');
const navigation = document.getElementById('main-navigation');

buttonMenu.addEventListener('click', openMenu);

buttonMenu.addEventListener('mousedown', function (e) {
    e.preventDefault();
});

function openMenu() {
    body.classList.toggle('show');
    navigation.classList.add('activated');
}

const mql = window.matchMedia('(min-width: 560px');

mql.addEventListener('click', removeTransition(this));

function removeTransition(e) {
    if(e.matches) {
        body.classList.remove('show');
        navigation.classList.remove('activated');
    }
}

// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;

// menuBtn.addEventListener('click', () => {
//     if(!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });