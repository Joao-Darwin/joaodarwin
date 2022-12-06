let body = document.querySelector("body");
let css = document.querySelector(".css");
let imgBotaoAtivar = document.querySelector(".imgBotaoAtivar");

let aux = 0;

imgBotaoAtivar.addEventListener('click', () => {
    if(aux == 0) {
        css.setAttribute("href", "stylesheetNight.css");
        imgBotaoAtivar.src = "imgs/botaoDesativar.png";
        aux = 1;
    } else {
        css.setAttribute("href", "stylesheet.css");
        imgBotaoAtivar.src = "imgs/botaoAtivar.png";
        aux = 0;
    }
})