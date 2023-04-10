// --------------------------------------------------------------------------------
var mybutton = document.getElementById("myBtn");
window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var button = document.querySelector('.parent');

  if (scrollPosition > 100) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
});
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// --------------------------------------------------------------------------------
window.onload = function () {
  let slideIndex = 0;
  showSlides();
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 10000);
  }
};
window.addEventListener('scroll', function () {
  var specialSection = document.getElementById('specials');
  var specialButton = document.querySelector('.nav-item a[href="#specials"]');
  var distanceToTop = specialSection.getBoundingClientRect().top;
  if (distanceToTop < window.innerHeight * 0.5) {
    specialButton.classList.add('active');
  } else {
    specialButton.classList.remove('active');
  }
});
// --------------------------------------------------------------------------------
window.onscroll = function () {
  var header = document.querySelector('header');
  var nav = document.querySelector('nav');
  if (window.pageYOffset > header.offsetHeight) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
}