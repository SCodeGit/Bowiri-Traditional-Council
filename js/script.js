// Highlight active page link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Back to Top Button
const topBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fade-in effect
const fadeElements = document.querySelectorAll(".fade-in");
fadeElements.forEach(el => {
  el.classList.add("fade-in");
});
