document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".burger").classList.toggle("active");
  document.querySelector("nav").classList.toggle("active");
});

$(window).on("scroll", function () {
  AOS.init();
});

