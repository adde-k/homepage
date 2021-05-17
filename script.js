// Vid scrollning utförs funktionen myFunction
window.onscroll = function() {myFunction()};

// Hämtar min navbar
let navbar = document.getElementById("navbar");

//Hämta navbarens "offset" positionen 
let sticky = navbar.offsetTop;

//Lägger till Sticky Position när man scrollar annars avslutas Sticky Position

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}