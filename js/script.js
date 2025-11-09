// =========================
// MENU
// =========================
const navMenu = document.getElementById("navMenu");

function toggleMenu() {
  navMenu.classList.toggle("active");
}

function closeMenu() {
  navMenu.classList.remove("active");
}

// =========================
// DARK MODE
// =========================
function toggleDark() {
  document.body.classList.toggle("dark");
}

// =========================
// PRODUK SLIDER
// =========================
const slider      = document.getElementById("produkSlider");
const nav         = document.getElementById("produkNav");
const items       = slider.querySelectorAll(".produk-item");
let currentSlide  = 0;

// Buat dot navigasi
nav.innerHTML = "";
items.forEach((_, index) => {
  const dot = document.createElement("span");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => scrollToSlide(index));
  nav.appendChild(dot);
});

function scrollToSlide(index) {
  currentSlide = index;
  slider.scrollTo({
    left: items[index].offsetLeft,
    behavior: "smooth"
  });
  updateDots();
}

function scrollProduk(step) {
  currentSlide += step;
  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide >= items.length) currentSlide = items.length - 1;
  scrollToSlide(currentSlide);
}

function updateDots() {
  const dots = nav.querySelectorAll("span");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlide]?.classList.add("active");
}

// =========================
// ACTIVE LINK SAAT SCROLL
// =========================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (pageYOffset >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});
