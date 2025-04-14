const parrafo = document.querySelector (".js_parrafo");

parrafo.addEventListener("click", (ev)  => {
     console.log("has hecho clic");
     parrafo.innerHTML+= parrafo.innerHTML; /**también sirve  .textContent*/ /* se utiliza con etiquetas que tiene texto en medio */

});