

let numero = document.querySelector ("js_numero");

numero.addEventListener("input", (ev) => {

if (numero.value === 0) {
    console.log('El número es 0')

  } else if (numero.value < 0) {
    console.log('El número es negativo')

  } else if (numero.value + 2 > 13 && numero.value + 2 <= 20) {
    console.log('El número más 2 es mayor que 13 pero menor o igual que 20')

  } else if (numero.value > 20 && numero.value < 50) {
    console.log('El número es mayor que 20 pero menor que 50')

  } else {
    console.log('el número no es 123123125')
  }

});

