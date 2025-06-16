const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'flex' : 'none';
    dots[i].classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

document.querySelector('.next').onclick = nextSlide;
document.querySelector('.prev').onclick = prevSlide;
dots.forEach((dot, i) => {
  dot.onclick = () => {
    current = i;
    showSlide(current);
  };
});

// Initialize
showSlide(current);
