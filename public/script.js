const mobileMenu = document.querySelector(".mobile-menu");
const menuOpen = document.querySelector(".hamburger");
const menuClose = document.querySelector(".close-icon");
const indicatorBtns = document.querySelectorAll(".indicator-btn");
const testimonialsContainer = document.querySelector(".testimonials-container");
const sliderObj = {
  0: "0",
  1: "-25",
  2: "-50",
  3: "-75",
};

indicatorBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    testimonialsContainer.style.transform = `translateX(${sliderObj[i]}%)`;
    indicatorBtns.forEach((item) => {
      item.classList.remove("active");
    });
    indicatorBtns[i].classList.add("active");
  });
});

menuOpen.addEventListener("click", () => {
  console.log("open");
  menuOpen.classList.add("hidden");
  mobileMenu.classList.remove("hidden");
});

menuClose.addEventListener("click", () => {
  console.log("close");
  menuOpen.classList.remove("hidden");
  mobileMenu.classList.add("hidden");
});

mobileMenu.addEventListener("click", (e) => {
  if (e.target == mobileMenu) {
    menuOpen.classList.remove("hidden");
    mobileMenu.classList.add("hidden");
  }
});
