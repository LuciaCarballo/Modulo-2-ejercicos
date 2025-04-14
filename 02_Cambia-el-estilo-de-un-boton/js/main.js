const boton = document.querySelector (".js_button");

boton.addEventListener("click", (ev) => {
    console.log("click en el botón");
    boton.classList.toggle("btn");
});
