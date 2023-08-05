import { example } from './data.js';
import data from './data/countries/countries.js';

console.log(example, data);

// me trae de la data nombre y banderas
const root = document.getElementById('root');
let contentRoot = '';
for (let i= 0; i<data.countries.length; i++) {  
    if(data.countries[i].subregion === "South America") { // selecciono solo sur america
       contentRoot += `<div class="BanderaContenedor">
        <img src="${data.countries[i].flags.png}" class="Bandera" 
        <h4>${data.countries[i].name.common}</h4> 
       </div>`;   
    }} // 
root.innerHTML=contentRoot;


// Cambiar el color de los botones automáticamente cada 2 segundos
const buttons = document.querySelectorAll('anside button'); 
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;}
function changeButtonColor() {
  buttons.forEach(button => {
    const randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
  });}
setInterval(changeButtonColor, 2000);

//lista de boton de filtros


























