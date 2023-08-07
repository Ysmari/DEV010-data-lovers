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
setInterval(changeButtonColor, 2000)

//lista de boton de filtros

// Debemos llamar las funciones que vamos a uctilizar 
const filtroForm= document.getElementById('filtroForm'); // El formulario
const  btnLimites = document.getElementById('limitantes'); // El boton 

btnLimites.addEventListener("click", function () { // Activo la funcion del botones
  const inputPais = document.getElementById('nombrePais'); // Traigo el inpu que se creo para colocar el nombre 
  let banderasLimitantes = ''; // Variable con cadena de texto vacia 
  for (let i= 0; i<data.countries.length; i++) { // Este for es para que me busque la palabra que coloque en la data
    if(data.countries[i].name.common.toLowerCase()== inputPais.value) { //Se hace el recorrido cuando sea el mismo nombre lo debe traer 
      let borders = data.countries[i].borders // Creo una variable que sea igual a la data segun lo que se requiera 
      
      
      for (let j= 0; j<borders.length; j++) {  // Este for me trae los bordes paises limites de cada pais 
        for (let k= 0; k<data.countries.length; k++) {  // Este for me trae la imagen de la badera con el nombre 
          if(borders[j] === data.countries[k].fifa) { // si los bordes son iguales a lo que tengo en la data me traiga imagenes
             banderasLimitantes += `<div class="BanderaContenedor"> 
              <img src="${data.countries[k].flags.png}" class="Bandera" 
              <h4>${data.countries[k].name.common}</h4> 
             </div>`;   
          }
        }
      }
    }
  }
  root.innerHTML = banderasLimitantes;
  });













