```javascript id="9e2rxv"
/*====================================
        MENU HAMBÚRGUER
====================================*/

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        menu.classList.toggle("ativo");

    });

}

/*====================================
        MODO ESCURO
====================================*/

const tema = document.getElementById("tema");

if(tema){

    tema.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            tema.innerHTML="☀";

        }else{

            tema.innerHTML="🌙";

        }

    });

}

/*====================================
        BOTÃO TOPO
====================================*/

const topo = document.getElementById("topo");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topo.style.display="block";

    }else{

        topo.style.display="none";

    }

});

topo.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*====================================
      CARROSSEL AUTOMÁTICO
====================================*/

const carrossel = document.querySelector(".carrossel");

if(carrossel){

let posicao=0;

setInterval(()=>{

    posicao += 280;

    if(posicao>=carrossel.scrollWidth){

        posicao=0;

    }

    carrossel.scrollTo({

        left:posicao,

        behavior:"smooth"

    });

},3000);

}

/*====================================
      ANIMAÇÃO DOS CARDS
====================================*/

const cards=document.querySelectorAll(".card");

const aparecer=()=>{

    cards.forEach(card=>{

        const topoTela=window.innerHeight;

        const posicao=card.getBoundingClientRect().top;

        if(posicao<topoTela-100){

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        }

    });

}

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".8s";

});

window.addEventListener("scroll",aparecer);

aparecer();

/*====================================
        EFEITO NOS SLIDES
====================================*/

const slides=document.querySelectorAll(".slide");

slides.forEach(slide=>{

slide.addEventListener("mouseenter",()=>{

slide.style.transform="scale(1.05)";

});

slide.addEventListener("mouseleave",()=>{

slide.style.transform="scale(1)";

});

});

/*====================================
        RELÓGIO
====================================*/

function atualizarTitulo(){

const agora=new Date();

const hora=agora.getHours();

if(hora<12){

document.title="☀ Física Interativa";

}else{

document.title="🌙 Física Interativa";

}

}

setInterval(atualizarTitulo,1000);

atualizarTitulo();
```
