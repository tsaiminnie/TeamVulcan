// "use strict";
$(() => {
  showSlides();
  console.log('jQuery is up and the DOM is loaded!');
});

//Hamburger Menu 
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

//Header Slideshow

$('.dotone').on('click', () => { changeSlides(1) });
$('.dottwo').on('click', () => { changeSlides(2)});
$('.dotthree').on('click', () => { changeSlides(3)});

let slideIndex = 1;
let timeoutId = [];
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");


function showSlides() {

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    console.log('change display');
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1} 

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
    console.log('change dots');
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  timeoutId.push(setTimeout(showSlides, 5000));
  console.log('hello');

}

/**
 * 
 * @param {integer} newSlideNumber must be in range [1,3] 
 */
function changeSlides(newSlideNumber) {

  for (let i = 0; i < timeoutId.length; i++) {
    clearTimeout(timeoutId[i]);
  }

  timeoutId = [];
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
    console.log('change slides in CHANGESLIDES function'); 
  }

  slideIndex = newSlideNumber;

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  timeoutId.push(setTimeout(showSlides, 5000));
  console.log('hello in CHANGESLIDES function');
  
}


