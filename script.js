/* MENU HAMBURGUER */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

/* TÍTULO ANIMADO */

const texto = "IFA - Inclusão e Acessibilidade";

const titulo = document.getElementById("titulo");

let i = 0;

function escrever(){

    if(i < texto.length){

        titulo.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escrever, 100);
    }
}

window.onload = escrever;
