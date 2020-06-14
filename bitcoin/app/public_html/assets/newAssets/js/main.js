var coinbitltd = coinbitltd || {};
coinbitltd.global = coinbitltd.global || {};
coinbitltd.global.init = function () {
  try {
    $(document).on("click", '[href="#"]', function (e) {
      e.preventDefault();
    });
    window.rippler = $.ripple('[data-ripple="ripple"], .area', {
      debug: true,
      multi: true,
    });

    $(".ziehharmonika").ziehharmonika({
      collapsible: true,
      // prefix: "★"
    });

    $(".ziehharmonika h3:eq(0)").ziehharmonika("open", true);
  } catch (e) {
    console.log("Error on coinbitltd.global.init " + e);
  }
};

coinbitltd.slides = coinbitltd.slides || {};
coinbitltd.slides.init = () => {
  try {
    $(".sliders").owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 6000,
      //autoplayHoverPause: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      rtl: true,
      nav: true,
      dots: false,
    });

    $(".carousels").owlCarousel({
      loop: true,
      margin: 30,
      smartSpeed: 600,
      autoplay: true,
      autoplayTimeout: 5000,
      rtl: true,
      nav: true,
      dots: true,
      responsiveClass: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1600: {
          items: 4,
        },
      },
    });
  } catch (e) {
    console.log("Error on coinbitltd.slides.init " + e);
  }
};

coinbitltd.menu = coinbitltd.menu || {};
coinbitltd.menu.init = function () {
  try {
    var openMenuBtn = document.getElementById("open-menu");
    var menuAside = document.querySelector("header .menu-aside");
    var headerOveral = document.querySelector("header .overal");

    openMenuBtn.addEventListener("click", function () {
      headerOveral.classList.add("show");
      menuAside.classList.add("show");
    });

    headerOveral.addEventListener("click", function () {
      headerOveral.classList.remove("show");
      menuAside.classList.remove("show");
    });

    // liMenu.on('click', function() {
    //   $('> ul', this).toggleClass('show');
    // })
  } catch (e) {
    console.log("Error on coinbitltd.menu.init " + e);
  }
};

$(document).ready(function() {
  coinbitltd.global.init();
  coinbitltd.slides.init();
  coinbitltd.menu.init();
});
