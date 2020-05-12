const navHeader = $(".nav--header");
const hamburgerButton = $(".nav__btn");

$(".nav__btn").on("click", function(e) {
  console.log("click");
  e.preventDefault();
  $(".nav--header").addClass("popup");
  $("nav__btn").addClass("nav__btn--disabled");
});

$(".close").on("click", function(e) {
  e.preventDefault();
  console.log("click close");
  $(".nav--header").removeClass("popup");
  $("nav__btn").removeClass("nav__btn--disabled");
});
