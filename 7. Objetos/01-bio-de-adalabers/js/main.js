"use strict";

/* Instrucciones:
    Crea un objeto llamado adalaber1 con:
        Nombre: 'Susana'
        Edad: 34
        Profesión: 'periodista'
    Muestra esta frase en la consola o en la web usando las propiedades del objeto:

Mi nombre es Susana, tengo 34 años y soy periodista

    Repite los pasos para crear adalaber2 con:
    Nombre: 'Rocío'
    Edad: 25
    Profesión: 'actriz'

Resultado esperado
Dos frases como la anterior, con los datos de cada Adalaber. */

const parrafo = document.querySelector(".js-parrafo");
const adalaber1 = {
  nombre: "Pepa",
  edad: 34,
  profesion: "periodista",
  distance: 100,

  run: function () {
    console.log("Estoy corriendo");
  },
  runMarathon: function () {
    console.log(
      `Estoy corriendo un maratón de ${adalaber1.distance} kilómetros`
    );
  },
  showBio: function () {
    console.log(
      `Mi nombre es ${adalaber1.nombre}, tengo ${adalaber1.edad} años y soy ${adalaber1.profesion}!!`
    );
  },
};

/*console.log ("Mi nombre es"`${adalaber1.nombre}" tengo"`${adalaber1.edad}" y soy"`${adalaber1.profesion})}; -> Estábamos haciendolo así pero está mal,
hay que usar solo unas comillas francesas y meter todo el contenido dentro, especificando las propiedades del objeto y ya*/

console.log(
  `Mi nombre es ${adalaber1.nombre}, tengo ${adalaber1.edad} años y soy ${adalaber1.profesion}`
);

parrafo.innerHTML = `Mi nombre es ${adalaber1.nombre}, tengo ${adalaber1.edad} años y soy ${adalaber1.profesion}`;

/*hemos probado a dejarlo escrito en el HTML para practicar*/

const adalaber2 = {
  nombre: "Rocío",
  edad: 25,
  profesion: "actriz",

  showBio: function () {
    console.log(
      `Mi nombre es ${adalaber2.nombre}, tengo ${adalaber2.edad} años y soy ${adalaber2.profesion}!!`
    );
  },
};

console.log(
  `Mi nombre es ${adalaber2.nombre}, tengo ${adalaber2.edad} años y soy ${adalaber2.profesion}`
);

adalaber1.run();
adalaber1.runMarathon();
adalaber1.showBio();
adalaber2.showBio();

/*EJERCICIO 2


2. A la carrera

    Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función)
    run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.

    Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número.
    Al ejecutarlo, debe mostrarse en la consola el texto  'Estoy corriendo un maratón de 50 kilómetros'
    siendo 50 el valor del argumento distance que le hemos pasado.*/

/*Hemos hecho la función run dentro de adalaber1 y luego la hemos llamado al final y lo mismo luego con runMarathon*/

/*EJERCICIO 3

3. Bio de Adalabers 2

Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) showBio que muestra en la consola la frase
'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.

Hacemos lo mismo para adalaber2. ¿Hemos tenido que modificar mucho el método showBio? ¿Ves alguna ventaja respecto a cómo hacíamos lo mismo en el ejercicio 1?

    Nota: para que el ejercicio funcione bien debéis usar funciones normales, no arrow funtions. En siguientes sesiones veremos por qué cambia el this al usar arrow funtions.*/
