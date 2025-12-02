// Simple fade-in animation for hero lines + dynamic year
document.addEventListener("DOMContentLoaded", () => {
  const line1El = document.getElementById("hero-line-1");
  const line2El = document.getElementById("hero-line-2");

  const line1Text = "Welcome";
  const line2Text = "To the world of Rishi";

  if (line1El && line2El) {
    // Set text immediately
    line1El.textContent = line1Text;
    line2El.textContent = line2Text;

    // Staggered fade-in via CSS class
    setTimeout(() => {
      line1El.classList.add("visible");
    }, 200);

    setTimeout(() => {
      line2El.classList.add("visible");
    }, 600);
  }

  // Footer year
  const yearEls = document.querySelectorAll("#year");
  const nowYear = new Date().getFullYear();
  yearEls.forEach((el) => {
    el.textContent = nowYear;
  });
});
