let index = 0;
const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');
const total = imagens.length;

function proximoSlide() {
  index = (index + 1) % total;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(proximoSlide, 4000); // muda a cada 4 segundos
