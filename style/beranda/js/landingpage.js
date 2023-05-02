$(".content_card .wrap_card").owlCarousel({
  margin: 20,
  navText: [
    "<img class='button_nav_box' src='../style/beranda/img/panah_kiri.svg'  alt='' />",
    "<img class='button_nav_box' src='../style/beranda/img/panah_kanan.svg' alt='' />",
  ],

  loop: true,
  smartSpeed: 400,
  nav: true,
  responsive: {
    0: {
      items: 1.3,
    },
    400: {
      items: 1.2,
    },
    500: {
      items: 1.5,
    },
    600: {
      items: 1.8,
    },
    750: {
      items: 1.9,
    },
    800: {
      items: 2.3,
    },
    900: {
      items: 2.5,
    },
    1000: {
      items: 2.8,
    },
    1150: {
      items: 3.5,
    },
    1300: {
      items: 3.8,
    },
    1400: {
      items: 4,
    },
    1500: {
      items: 4.5,
    },
  },
});

$(".content_banner .wrap_banner").owlCarousel({
  margin: 20,
  navText: [
    "<img class='button_nav' src='../style/beranda/img/panah_banner_kiri.svg'  alt='' />",
    "<img class='button_nav' src='../style/beranda/img/panah_banner_kanan.svg' alt='' />",
  ],

  loop: true,
  smartSpeed: 400,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});
