
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
  var slides = document.getElementsByClassName("mySlide");
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


//var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
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
  } /*else {
    navbar.classList.remove("sticky");
  }*/
}

//för submit btn kontakta oss
function formBtn() {
  alert("We'll contact you soon");
}

function footerBtn() {
  alert("Thanks for subscribing");
}