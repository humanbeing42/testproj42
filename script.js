// Typewriter effect for the hero lines on the home page
document.addEventListener("DOMContentLoaded", () => {
  const line1El = document.getElementById("hero-line-1");
  const line2El = document.getElementById("hero-line-2");

  const line1Text = "Welcome";
  const line2Text = "To the world of Rishi";

  const typeSpeed = 90; // milliseconds per character
  const betweenLinesDelay = 400; // pause between line 1 and line 2

  function typeText(element, text, speed) {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        element.textContent = text.slice(0, i + 1);
        i++;
        if (i === text.length) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });
  }

  async function runTypewriter() {
    if (line1El && line2El) {
      await typeText(line1El, line1Text, typeSpeed);
      await new Promise((res) => setTimeout(res, betweenLinesDelay));
      await typeText(line2El, line2Text, typeSpeed);
    }
  }

  runTypewriter();

  // Footer year
  const yearEls = document.querySelectorAll("#year");
  const nowYear = new Date().getFullYear();
  yearEls.forEach((el) => (el.textContent = nowYear));
});
