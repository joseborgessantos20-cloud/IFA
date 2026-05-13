// ===================== Menu Hamburger =====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// ===================== Título Animado =====================
const titleText = "Bem-vindo ao IFA - Teoria e Slides";
const animatedTitle = document.getElementById('animated-title');
let i = 0;

function typeWriter() {
    if (i < titleText.length) {
        animatedTitle.innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Velocidade da digitação
    }
}

// Inicia animação do título quando a página carregar
window.onload = typeWriter;

// ===================== Slider de Imagens =====================
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

// Função para mostrar o slide correto
function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;

    // Atualiza dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Botões anterior e próximo
prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Cliques nos dots
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        showSlide(idx);
    });
});

// Auto-slide a cada 5 segundos
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// Inicializa o slider
showSlide(currentIndex);
