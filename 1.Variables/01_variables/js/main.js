/** Estamos llamando a la clase del HTML y dándole un valor en JS (.js_title es elementoTitle) */
const elementoTitle = document.querySelector(".js_title");
/**estamos modificando ese elemento desde el JS */
elementoTitle.innerHTML =
  "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";
