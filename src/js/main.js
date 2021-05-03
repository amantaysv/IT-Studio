document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".burger").classList.toggle("active");
  document.querySelector("nav").classList.toggle("active");
});

AOS.init();
