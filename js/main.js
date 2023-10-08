/* selecciono el elemento carrusel */
const carrousel = document.querySelector(".carrousel");

/* deplazamiento al pasar el mouse
const dragging = (e) =>{
    carrousel.scrollLeft = e.pageX;
}
carrousel.addEventListener("mousemove", dragging); */

/* ir hacia la izquierda y derecha */
const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");

leftButton.onclick = function(){
    let card = document.querySelector(".carrousel").offsetWidth;
  
    carrousel.scrollLeft -= card;
  }
  
  // botón derecho:
  
  rightButton.onclick = function(){
    let card = document.querySelector(".carrousel").offsetWidth;
  
    carrousel.scrollLeft += card;
  }