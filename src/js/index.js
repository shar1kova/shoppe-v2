import mobileNav from "./modules/mobile-nav.js";
mobileNav();

new Swiper(".header-swiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
});

new Swiper(".hero-slider", {
  loop: true,
  speed: 1000,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".hero__pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  parallax: {
    enabled: true,
  },
});
