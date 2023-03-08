const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

var typed = new Typed(".auto-input", {
  strings: ["UI Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
