document.addEventListener("DOMContentLoaded", () => {
  $(".reviews__slider").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    autoplay: true,
    // responsive: [
    //   {
    //     breakpoint: 730,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  });
  $(".brands__slider").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow:
      '<button  type="button" class="slick-next wow animate__flash"><img src="./assets/img/brands/next-2.svg" alt=""></button>',
    prevArrow:
      '<button  type="button" class="slick-prev wow animate__flash"><img src="./assets/img/brands/previous-2.svg" alt=""></button>',
    // dots: true,
    responsive: [
      {
        breakpoint: 1560,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1110,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 676,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
  const mixer = mixitup(".portfolio__box");
  wow = new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 0,
    mobile: true,
    live: true,
  });
  wow.init();
  //burger menu
  const burgerOpen = document.querySelector(".header-nav__burger-wrapper");
  const burgerMenu = document.querySelector(".header-nav__list-responsive");
  burgerOpen.addEventListener("click", () => {
    burgerMenu.style.display = "flex";
  });
  burgerMenu.addEventListener("click", (e) => {
    console.dir(e.target);
    if (
      e.target.className === "header-nav__list-responsive" ||
      e.target.className === "header-nav__list-close" ||
      e.target.tagName === "A"
    ) {
      burgerMenu.style.display = "none";
    }
  });
  //burger menu
});
