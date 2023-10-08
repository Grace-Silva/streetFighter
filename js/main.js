/* selecciono el elemento carrusel */
const carrousel = document.querySelector(".carrousel");

/* ir hacia la izquierda y derecha */
const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");

// botón izquierdo
leftButton.onclick = function(){
    let card = document.querySelector(".carrousel").offsetWidth;
    carrousel.scrollLeft -= card;
  }
  
  // botón derecho:
  rightButton.onclick = function(){
    let card = document.querySelector(".carrousel").offsetWidth;
    carrousel.scrollLeft += card;
  }