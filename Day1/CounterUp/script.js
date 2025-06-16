// Counter Up Animation
function animateCounter(counter, target, duration = 1800) {
    let start = 0;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      counter.textContent = Math.floor(progress * (target - start) + start);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };
    requestAnimationFrame(step);
  }

  // Animate when section is in viewport
  let animated = false;
  function handleScroll() {
    const section = document.getElementById("counterSection");
    const rect = section.getBoundingClientRect();
    if (!animated && rect.top < window.innerHeight - 100) {
      document.querySelectorAll(".counter").forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        animateCounter(counter, target);
      });
      animated = true;
    }
  }
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("DOMContentLoaded", handleScroll);