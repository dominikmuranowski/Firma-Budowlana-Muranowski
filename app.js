const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const glowna = document.querySelector("#nav-strona");
const uslugi = document.querySelector("#nav-uslugi");
const onas = document.querySelector("#nav-onas");
const projekty = document.querySelector("#nav-projekty");
const kontakt = document.querySelector("#nav-kontakt");
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

glowna.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


uslugi.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

onas.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

projekty.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

kontakt.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  links.forEach(link => {
    link.classList.toggle("fade");
  });
});



$("#arrow").click(function() {
  $('html, body').animate({
      scrollTop: $("#uslugi").offset().top - 120
  }, 1000);
});


$(document).on('click', 'a[href^="#"]', function(e) {
  // target element id
  var id = $(this).attr('href');

  // target element
  var $id = $(id);
  if ($id.length === 0) {
      return;
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $id.offset().top - 100;

  // animated top scrolling
  $('body, html').animate({scrollTop: pos});
});