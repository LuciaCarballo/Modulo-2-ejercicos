'use strict';

const usuario = {
  
}

const trabajo = "developer";
const trabajo2 = "teacher";


usuario.firstName ="Ana"; //tambien se puede hacer: usuario["firstName"]
usuario.lastName = "González";
usuario.age = 25;
usuario.job = trabajo; //traemos la constante que hemos creado

console.log (usuario);

//modificamos las propiedades del objeto
usuario.firstName ="Marta";
usuario.lastName = "García";
usuario.age = usuario.age+1; //aumenta en 1 la edad del usuario
usuario.job = trabajo2; 

console.log (usuario);



