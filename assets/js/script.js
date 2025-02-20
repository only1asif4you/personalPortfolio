/* ======================
* PRELOADER
====================== */
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector("#preloader");
  window.addEventListener("load", () => {
    preloader.classList.add("preloaded");
    setTimeout(() => {
      preloader.remove();
    }, 1500);
  });
});

/* ======================
* STICKY NAVBAR
====================== */
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $(".navbar").addClass("nav-sticky");
  } else {
    $(".navbar").removeClass("nav-sticky");
  }
});

/* ======================
* SCROLL SPY
====================== */
const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll(".nav-link");

  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }
};

const spyScrolling = () => {
  const sections = document.querySelectorAll(".scrollspy_nav_active");

  window.onscroll = () => {
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[s].id;
        document.querySelector(".active").classList.remove("active");
        document
          .querySelector(`a[href*=${id}]`)
          .parentNode.classList.add("active");
      }
  };
};

makeNavLinksSmooth();
spyScrolling();

/* ======================
* TYPED 
====================== */
if ($("#home .home-text h2").length == 1) {
  var typed_strings = $("#home .home-text .typed-text").text();
  var typed = new Typed("#home .home-text h2", {
    strings: typed_strings.split(", "),
    typeSpeed: 70,
    backSpeed: 35,
    smartBackspace: false,
    loop: true,
  });
}

/* ======================
* COUNTER UP  
====================== */
$(".counter").counterUp({
  delay: 10,
  time: 2000,
});
$(".counter").addClass("animated fadeInDownBig");
$("h3").addClass("animated fadeIn");

/* ======================
* WAY POINTS / PROGRESS BAR  
====================== */
$(".skills").waypoint(
  function () {
    $(".progress .progress-bar").each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });
  },
  { offset: "90%" }
);

/* ======================
* ISOTOPE / PORTFOLIO GALLERY 
====================== */
var portfolioIsotope = $(".portfolio-container").isotope({
  itemSelector: ".portfolio-item",
  layoutMode: "fitRows",
});

$("#portfolio-filters li").on("click", function () {
  $("#portfolio-filters li").removeClass("filter-active");
  $(this).addClass("filter-active");

  portfolioIsotope.isotope({ filter: $(this).data("filter") });
});

/* ======================
* OWL CAROUSEL / REVIEWS  
====================== */
$(".testimonials-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 1500,
  smartSpeed: 1500,
  dots: true,
  loop: true,
  items: 1,
});

/* ======================
* BACK TO TOP  
====================== */
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  return false;
});

/* ======================
*  WOW JS / ANIMATE.CSS  
====================== */
new WOW().init();
