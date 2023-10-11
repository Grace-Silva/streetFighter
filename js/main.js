/* selecciono el elemento carrusel */
const carrousel = document.querySelector(".carrousel");

/* ir hacia la izquierda y derecha */
const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");

// botón izquierdo
leftButton.onclick = function () {
  let card = document.querySelector(".carrousel").offsetWidth;
  carrousel.scrollLeft -= card;
};

// botón derecho:
rightButton.onclick = function () {
  let card = document.querySelector(".carrousel").offsetWidth;
  carrousel.scrollLeft += card;
};

/** función para el botón ir arriba **/
let goUp = document.querySelector(".goUp");
goUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

let header = document.querySelector("header");


/* aparecer y desaparecer botón */
window.onscroll = () => {
  if (window.scrollY <= 120) {
    header.style.visibility="visible";
    goUp.style.visibility = "hidden";
    goUp.style.opacity = "0";
  } else {
    goUp.style.visibility = "visible";
    goUp.style.opacity = "1";
    header.style.visibility="hidden";
  }
};
