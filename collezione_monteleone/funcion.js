let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

function goToSlide(index) {   
  showSlide(index);
}

function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('show');
}

setInterval(() => {
  let nextSlide = (currentSlide + 1) % slides.length;
  showSlide(nextSlide);
}, 4000);

