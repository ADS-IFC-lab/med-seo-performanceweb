const carousel = document.getElementById('carousel-catalog');
const cards = document.querySelectorAll('.card-catalog');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');

let currentIndex = 1; // começa com o segundo card visível no meio

function updateCarousel() {
    const offset = (currentIndex - 1) * (100 / 3); // centraliza o atual
    carousel.style.transform = `translateX(-${offset}%)`;

    // Remover destaque anterior
    cards.forEach(card => card.classList.remove('active'));

    // Determina qual deve estar em destaque
    if (currentIndex === 0) {
        cards[1].classList.add('active'); // destaque no primeiro
    } else if (currentIndex >= cards.length - 1) {
        cards[cards.length - 1].classList.add('active'); // destaque no último
    } else {
        cards[currentIndex].classList.add('active'); // destaque no atual
    }
}

leftBtn.addEventListener('click', () => {
    if (currentIndex > 1) {
        currentIndex--;
        updateCarousel();
    }
});

rightBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Chamada inicial
updateCarousel();