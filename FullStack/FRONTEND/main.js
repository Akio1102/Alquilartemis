import { TablePersonas } from "./Components/Tables/tablePersonas.js";
import { ModalPersonas } from "./Components/Modals/modalPersonas.js";
import { viewPersonas, sendPersonas } from "./Views/Personas.js";

let container = document.querySelector(`#container`);
let addPersonas = document.querySelector(`#addPersonas`);
let personas = document.querySelector(`#Personas`);

personas.addEventListener("click", (e) => {
  e.preventDefault();
  container.innerHTML = "";
  TablePersonas();

  let modalPersonas = document.querySelector("#modalPersonas");

  if (modalPersonas === null) ModalPersonas();
  addPersonas.setAttribute("data-bs-toggle", "modal");
  addPersonas.setAttribute("data-bs-target", "#modalPersonas");
  viewPersonas();

  let myFormPersona = document.querySelector(`#myFormPersona`);
  myFormPersona.addEventListener("submit", (e) => {
    let accion = e.submitter.dataset.accion;
    if (accion === "enviar") {
      sendPersonas(e);
    } else {
      console.log(`No se puede agregar Datos Vacios`);
    }
  });
});
