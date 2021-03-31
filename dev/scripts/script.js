// "use strict";

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

// var dots = document.getElementsByClassName("dot");

// function showSlides(dots) {
//     let slideIndex = 0;  
//     let slides = document.getElementsByClassName("mySlides");
    

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         console.log('sliding');
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace("active", "");
//         console.log('slidinggggggggggg');
//     }
//     slides[slideIndex-1].className.display = "block";
//     dots[slideIndex-1].className += "active";
//     setTimeout(showSlides(dots), 3000);
// }

// showSlides(dots);

let slideIndex = 1;
showSlides();

function showSlides() {

  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}

function currentSlide (n) {
    showSlides(slideIndex = n);
}