/* =========================================
   ARCHIVUM — Interações simples em JS puro
   ========================================= */

// 1) Ano dinâmico no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// 2) Navbar com efeito ao rolar
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);

  // Botão "voltar ao topo"
  toTop.classList.toggle("visible", window.scrollY > 500);
});

// 3) Menu hambúrguer (mobile)
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Fecha o menu ao clicar em um link (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// 4) Botão "voltar ao topo"
const toTop = document.getElementById("toTop");
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 5) Reveal on scroll com IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
