'use script'

/* for (let i = 1; i < 11; i++){
    console.log("Voy por la vuelta "+ i)
}
    
for (let i = 1; i <=10; i++){
    console.log("Voy por la vuelta "+ i)
}
 */

let suma = 0
let suma2 = 0

for (let i = 1; i <=10; i++){
    suma = suma + 2
    console.log(`El resultado es: en la vuelta ${i} es ${suma}`);
}

console.log(`El resultado final es: ${suma}`);


for (let i = 1; i <=10; i+=3){
    suma2 = suma2 + 2
    console.log(`El resultado es: en la vuelta ${i} es ${suma2}`);
}

console.log(`El resultado final es: ${suma2}`);