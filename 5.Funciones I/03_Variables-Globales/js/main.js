/* Prueba a cambiar el orden del los console.log.
¿Qué está pasando? ¿Por qué no se imprime en la consola 2 veces "x"? */

// modificamos una variable de ámbito global
let secretLetter = 'y';

function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x"
