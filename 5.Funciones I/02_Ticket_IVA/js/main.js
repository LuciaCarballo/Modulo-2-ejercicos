/* Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. 
Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo. */

const textoPrecio = document.querySelector (".js_precio");

/*Pasos funcion: 
  enseñar precio y mensaje
  calcular el iva numero*0,21
  precio total numero +iva */

function Precio (numero){
    let iva = numero*0.21;
    let precioTotal = iva + numero
    console.log(`Precio sin IVA:${numero} IVA:${iva} Total:${precioTotal}`)
    textoPrecio.innerHTML = (`Precio sin IVA:${numero} IVA:${iva} Total:${precioTotal}`) /* Para que se vea en la web*/

}



Precio (17)
Precio (8)
Precio (12)

/* En la web solo aparece el ultimo resultado, porque JS lee de arriba a abajo*/
 


