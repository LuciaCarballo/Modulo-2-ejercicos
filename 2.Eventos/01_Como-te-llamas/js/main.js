const elementoBoton = document.querySelector(".js_boton")
const elementoInput = document.querySelector(".js_input")
const elementoSpan = document.querySelector(".js_span")

elementoBoton.addEventListener("click", (ev) => {

        console.log("he hecho click");
        console.log(elementoInput.value);
        elementoSpan.innerHTML = "Hola " + elementoInput.value;


} )