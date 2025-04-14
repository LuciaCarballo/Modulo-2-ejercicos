const nombre = document.querySelector(".js_nombre");
const parrafo = document.querySelector(".js_parrafo");

nombre.addEventListener("input", (event) => {
    console.log(nombre.value);
    if (nombre.value === "María" || nombre.value === "Luisa") {
        parrafo.innerHTML = "Bienvenida, " + nombre.value }
        else {parrafo.innerHTML = "Lo siento pero el usuario que has introducido no está registrado"}
});
