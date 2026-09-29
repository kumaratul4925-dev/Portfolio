// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Back-to-top button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Close Bootstrap mobile navigation after clicking a link
document.querySelectorAll("#mainNav .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("mainNav");
    if (nav.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});
