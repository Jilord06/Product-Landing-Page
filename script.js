// Toggle menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

// Play button interaction
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  alert("🎶 Playing preview...");
});

// Smooth scrolling
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
const playButtons = document.querySelectorAll(".play-btn");

playButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("🎶 Playing your track...");
  });
});