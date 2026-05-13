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
    if(i < titleText.length) {
        animatedTitle.innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// ===================== Slider de Imagens =====================
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

// Função para mostrar slide específico
function showSlide(index) {
    if(index >= images.length) currentIndex = 0;
    else if(index < 0) currentIndex = images.length - 1;
    else currentIndex = index;

    slides.style.transform = `translateX(${-currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Botões anterior e próximo
prev.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Cliques nos dots
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        showSlide(idx);
    });
});

// Auto slide a cada 5 segundos
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// Inicializa o slider
showSlide(currentIndex);
