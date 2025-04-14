const parrafo = document.querySelector (".js_parrafo");

parrafo.addEventListener("click", (ev)  => {
     console.log("has hecho clic");
     parrafo.inner+= parrafo.value;

});