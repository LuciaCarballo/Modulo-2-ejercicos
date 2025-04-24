"use strict";

/*4. Crear una cesta de peras

Crea un objeto que sea una cesta de peras y que debe tener varias propiedades:

    Número máximo de peras

    Número mínimo de peras

    Número actual de peras

    Número inicial de peras

Y varios métodos que hagan:

    Añadir al cesto una pera

    Sacar del cesto una pera

    Restablecer el número de peras al valor inicial.

Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente.*/

const cesta = {
  maximo: 10,
  minimo: 2,
  inicial: 8,
  actual: 0,

  comienzo: function () {
    this.actual = this.inicial;
  },

  anadir: function () {
    this.actual = this.actual + 1;
  },

  sacar: function () {
    this.actual = this.actual - 1;
  },
  restablecer: function () {
    this.actual = this.inicial;
  },
};

cesta.comienzo();
console.log(cesta.actual);

cesta.anadir();
console.log(cesta.actual);

cesta.sacar();
console.log(cesta.actual);

cesta.restablecer();
console.log(cesta.actual);

/*Restablecer el número de peras al valor inicial:*/
