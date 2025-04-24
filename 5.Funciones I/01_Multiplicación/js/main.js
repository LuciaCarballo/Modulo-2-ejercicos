 function Multiplicacion () {
  let valor1 = 6;
  let valor2 = 8;
  let multiplicacion = valor1*valor2;
  console.log(multiplicacion)
  
}

Multiplicacion ();


function Media (valor1, valor2, valor3, valor4, valor5) {
    let media = (valor1+valor2+valor3+valor4,valor5)/5 
    console.log(media)
}

Media (2,3,4,5,6)

Media (5,7,8,5,7)

Media (5,7,9,5,9)

Media (5,7,9,5,6)






/* 
Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar. Ejecútala e imprime el resultado para comprobar que funciona. */

function esParOImpar(numero) {
  if (numero % 2 === 0) {
    console.log("el numero es par!");
      
  } else {
    console.log("el numero es impar!");
       
  }
}

esParOImpar(15)

