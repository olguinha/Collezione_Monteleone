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



 const carousel = document.getElementById("carousel");
 const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

    btnLeft.addEventListener("click", () => {
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
      carousel.scrollBy({ left: 300, behavior: "smooth" });
    });



 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Limpa mensagens anteriores
    document.getElementById('error-message').innerText = '';
    document.getElementById('success-message').innerText = '';

    // Coleta os valores
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação simples
    if (name === '' || email === '' || message === '') {
      document.getElementById('error-message').innerText = 'Por favor, preencha todos os campos.';
      return;
    }

    // Validação básica de e-mail
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      document.getElementById('error-message').innerText = 'Por favor, insira um e-mail válido.';
      return;
    }

    // Se passou nas validações
    document.getElementById('success-message').innerText = 'Mensagem enviada com sucesso!';
    
    // Aqui você pode implementar o envio real (via AJAX ou backend)
    // Exemplo: limpar o formulário
    document.getElementById('contactForm').reset();

  });

   const testimonials = [
    {
      text: "There are many different animals in the zoo, but I liked the giraffe the most. He is very kind and sociable. I will come to the giraffe every week.",
      author: "John Clark",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "I love visiting the zoo! The elephants are my favorite. They are so big and funny!",
      author: "Emily Rose",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "The lions are super cool! I always take lots of photos. It's my favorite place!",
      author: "Mike Johnson",
      image: "https://randomuser.me/api/portraits/men/65.jpg"
    }
  ];

  let currentIndex = 0;

  function showTestimonial(index) {
    const testimonial = testimonials[index];
    document.getElementById('testimonial-text').innerHTML = `
      <p>"${testimonial.text}"</p>
      <div class="author">${testimonial.author}</div>
    `;
    document.getElementById('testimonial-image').innerHTML = `
      <img src="${testimonial.image}" alt="Profile Photo">
    `;
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }
