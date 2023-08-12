import { example, filtrarIdioma, ordenarAZ, filtrarPaisesLimitantes, calcularArea } from './data.js'; //aqui se agrego ordenar de AZ para darle funcionalidad al boton desde data.js
//import { example, filtrarDataLimites} from './data.js';

import data from './data/countries/countries.js';

console.log(example, data);
 
//Capturar infirmacion//
// Mostrar en Lista desplegable la información
const opcionSeleccionada = document.getElementById("opciones"); 

opcionSeleccionada.addEventListener("change",function(){

  const valorSeleccionado= opcionSeleccionada.value;
  if(valorSeleccionado==="limitantes"){
    document.getElementById("limitesForm").style.display="block";
    document.getElementById("areaForm").style.display="none";
    document.getElementById("idiomaForm").style.display="none";
  
  }
  else if(valorSeleccionado==="idioma"){
    document.getElementById("idiomaForm").style.display="block";
    document.getElementById("areaForm").style.display="none";
    document.getElementById("limitesForm").style.display="none";

    function volverInicio(){
      document.getElementById('opciones').style.display = "block";
      document.getElementById('idiomaForm').style.display = "none"; 
    }
  }
  else if(valorSeleccionado==="calculo"){
    document.getElementById("areaForm").style.display="block";
    document.getElementById("idiomaForm").style.display="none";
    document.getElementById("limitesForm").style.display="none";

    function volverInicio(){
      document.getElementById('opciones').style.display = "block";
      document.getElementById('areaForm').style.display = "none"; 
    }
  }
  
})

// me trae de la data nombre y banderas
const root = document.getElementById('root');

//movimiento de las banderas  y  informacion trasera de las bandera 

function pintarData (data){
  let contentRootInfo = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i].subregion === 'South America') {
        const country = data[i];
        const languages = Object.values(country.languages).join(', ');
  
        contentRootInfo += `<div class="bandera-container">
            <div class="bandera-wrapper">
                <img src="${country.flags.png}" class="Bandera" id="bandera-${i}"/>
                <h4>${country.name.common}</h4> 
            </div>
            <div class="info-back">
                <h4>${country.name.common}</h4>
                <p>Población: ${country.population}</p>
                <p>Área: ${country.area}</p>
                <p>Países Frontera: ${country.borders}</p>
                <p>Idiomas: ${languages}</p>
            </div>
        </div>`;
    }
  }
  root.innerHTML=contentRootInfo;

const banderaImages = document.querySelectorAll('.Bandera');

banderaImages.forEach(image => {
  const container = image.closest('.bandera-container');
  const infoBack = container.querySelector('.info-back');
  
  image.addEventListener('click', function () {
    container.classList.toggle('show-info');
    image.classList.toggle('rotate');
  });

  infoBack.addEventListener('click', function () {
    container.classList.remove('show-info');
    image.classList.remove('rotate');
  });
});
}
pintarData(data.countries)

// Botton 1 Organizar


const buttonOrdenar = document.getElementById('button1'); // Obtén una referencia al botón de ordenar
buttonOrdenar.addEventListener('click', () => { // Agrega un evento de clic al botón
  const banderasOrdenadas = ordenarAZ(root.querySelectorAll('.bandera-container')); // Llama a la función ordenarAZ para ordenar las banderas de A a Z
  root.innerHTML = '';// Elimina las banderas originales
  banderasOrdenadas.forEach(bandera => { // Agrega las banderas ordenadas al root nuevamente
    root.appendChild(bandera);
  });
});


//Boton de filtros paises limitantes.

// Debemos llamar las funciones que vamos a uctilizar 

const btnLimites = document.getElementById('limitantes');
btnLimites.addEventListener('click', function () {
  const inputPais = document.getElementById('input1');
  const paisElegido = inputPais.value;
  
  
  const paisesLimitantes = filtrarPaisesLimitantes(data, paisElegido);
  pintarData(paisesLimitantes);
});

// Boton de filtro Idioma 

  const btnIdioma = document.getElementById('idioma')
  btnIdioma.addEventListener('click',function () {
    const inputIdioma = document.getElementById('input2').value;
    const dataFiltradaPorIdioma = filtrarIdioma(data.countries, inputIdioma);
    pintarData(dataFiltradaPorIdioma);
  }) 

//calcular área entre dos paises
  const btnCalcular = document.getElementById ('calcular')
  btnCalcular.addEventListener('click',function(){
  const inpuCalcular1 = document.getElementById('area1').value;
  const inpuCalcular2 = document.getElementById('area2').value;
  const sumaArea= calcularArea(data, inpuCalcular1,inpuCalcular2);
  console.log(sumaArea)
  alert('Area Total: '+ sumaArea)
  })