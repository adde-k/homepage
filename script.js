
//Slideshow picture link gallery
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlideLinks");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex =1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {

      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Vid scrollning utförs funktionen myFunction
window.onscroll = function() {myFunction()};

// Hämtar min navbar
let navbar = document.getElementById("navbar");

//Hämta navbarens "offset" positionen 
let sticky = navbar.offsetTop;

//Lägger till Sticky Position när man scrollar annars avslutas Sticky Position
//Fix scrolling bug
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky") 
  } else {
    navbar.classList.remove("sticky");
  }
}


