// ===== Menu Hamburger =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// ===== Título animado (efeito digitação) =====
const title = document.getElementById('animated-title');
const text = "Bem-vindo ao Meu Site!";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        title.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        title.style.borderRight = "none"; // Remove cursor após digitar
    }
}
typeWriter();

// ===== Slides de imagens =====
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let index = 0;

function showSlide(i) {
    if (i < 0) index = images.length - 1;
    else if (i >= images.length) index = 0;
    else index = i;

    slides.style.transform = `translateX(${-index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
});

// Slide automático
setInterval(() => {
    showSlide(index + 1);
}, 5000);

showSlide(index);
