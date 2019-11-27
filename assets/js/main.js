const slides = [...document.querySelectorAll(".slide")];
const arrows = [...document.querySelectorAll(".slider__arrow")];

const activeClass = "slide--active";

arrows.forEach(arrow => {
  arrow.addEventListener("click", e => {
    const arrowAction = e.target.dataset.action;
    const activeSlide = document.querySelector(".slide.slide--active");

    if (arrowAction != "prev") {
      activeSlide.classList.remove(activeClass);
      if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add(activeClass);
      } else {
        slides[0].classList.add(activeClass);
      }
    } else {
      activeSlide.classList.remove(activeClass);
      if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add(activeClass);
      } else {
        slides[slides.length - 1].classList.add(activeClass);
      }
    }
  });
});
