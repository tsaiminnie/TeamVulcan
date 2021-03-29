"use strict";

const body = document.body;
const buttonMenu = document.getElementById('button-menu');
const navigation = document.getElementById('main-navigation');

buttonMenu.addEventListener('click', openMenu);

buttonMenu.addEventListener('mousedown', function (e) {
    e.preventDefault();
});

function openMenu() {
    body.classList.toggle('show');
    navigation.classList('activated');
}

const mql = window.matchMedia('(min-width: 560px');

mql.addEventListener('click', removeTransition(this));

function removeTransition(e) {
    if(e.matches) {
        body.classList.remove('show');
        navigation.classList.remove('activated');
    }
}