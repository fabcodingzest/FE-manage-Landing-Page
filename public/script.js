const mobileMenu = document.querySelector(".mobile-menu");
const menuOpen = document.querySelector(".hamburger");
const menuClose = document.querySelector(".close-icon");
const indicatorBtns = document.querySelectorAll(".indicator-btn");
const testimonialsContainer = document.querySelector(".testimonials-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const sliderObj = {
  0: "0",
  1: "-25",
  2: "-50",
  3: "-75",
};

function changeSlide(i) {
  testimonialsContainer.style.transform = `translateX(${sliderObj[i]}%)`;
  indicatorBtns.forEach((item) => {
    item.classList.remove("active");
  });
  indicatorBtns[i].classList.add("active");
}

function getKey() {
  const matrix = window.getComputedStyle(testimonialsContainer).getPropertyValue("transform");
  const width = parseInt(window.getComputedStyle(testimonialsContainer).getPropertyValue("width").split("").slice(0, -2).join(""));
  let x = parseInt(matrix.match(/matrix.*\((.+)\)/)[1].split(", ")[4]);
  let key = x < 0 ? ((x / width) * -100) / 25 : 0;
  console.log(key);
  return key;
}

prevBtn.addEventListener("click", () => {
  let key = getKey() - 1;
  if (key < 0) key = 3;
  changeSlide(key);
});
nextBtn.addEventListener("click", () => {
  let key = getKey() + 1;
  if (key > 3) key = 0;
  changeSlide(key);
});
indicatorBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    changeSlide(i);
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
