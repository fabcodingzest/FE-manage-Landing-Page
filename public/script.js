const mobileMenu = document.querySelector(".mobile-menu");
const menuOpen = document.querySelector(".hamburger");
const menuClose = document.querySelector(".close-icon");

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
