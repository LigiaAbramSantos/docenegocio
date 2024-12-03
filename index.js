const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
const itemWidth = items[0].offsetWidth; // Pega a largura do primeiro item para o deslocamento

function updateCarousel() {
  const offset = -currentIndex * itemWidth; // Desloca com base na largura de cada item
  carousel.style.transform = `translateX(${offset}px)`; // Mudança em px, não em %
  updateIndicators();
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length; // Passa para o próximo slide
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Passa para o slide anterior
  updateCarousel();
});

indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    currentIndex = parseInt(indicator.dataset.index, 10); // Pega o índice do indicador clicado
    updateCarousel();
  });
});

updateCarousel(); // Inicializa o carrossel e os indicadores