'use strict';


//PINTAR LISTA DE PELIS EN EL HTML
const listaPelis = document.querySelector (".js_list");

const peliculas = ["Mi vecino Totoro", "El castillo ambulante", "El viaje de Chihiro"];

listaPelis.innerHTML += `<li>${peliculas[0]}</li>`;
listaPelis.innerHTML += `<li>${peliculas[1]}</li>`;
listaPelis.innerHTML += `<li>${peliculas[2]}</li>`;

//AÑADIR OTRA PELI Y MODIFICAR UNA DE LAS PELIS
peliculas[3]="Ponyo en el acantilado";//AÑADIR
peliculas[3]="La princesa Mononoke";//MODIFICAR: hay que poner la modificacion justo donde queremos que modifique
listaPelis.innerHTML += `<li>${peliculas[3]}</li>`;
console.log(peliculas);

//MODIFICAR UNA PELI
/* peliculas[3]="La princesa Mononoke";
listaPelis.innerHTML += `<li>${peliculas[3]}</li>`;  */

//FUNCION
function workWithMovies () {
    console.log ("lista completa");
}

workWithMovies ();
