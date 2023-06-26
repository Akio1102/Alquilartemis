import { TablePersonas } from "./Components/Tables/tablePersonas.js";
import { ModalPersonas } from "./Components/Modals/modalPersonas.js";
import { ModalPersonasEdit } from "./Components/Modals/modalPersonasEdit.js";
import { viewPersonas, sendPersonas } from "./Views/Personas.js";

const container = document.querySelector(`#container`);
const addPersonas = document.querySelector(`#addPersonas`);
const personas = document.querySelector(`#Personas`);

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
    e.preventDefault();
    let accion = e.submitter.dataset.accion;
    if (accion === "enviar") {
      sendPersonas(e);
    } else {
      console.log(`No se puede agregar Datos Vacios`);
    }
  });

  let myData = document.querySelector("#tabla");
  myData.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    let accion = e.target.dataset.accion;
    let id = e.target.closest(`tr`).getAttribute(`id`);
    if (accion === "eliminar") {
      DELETECategorias(id);
      alert(`Persona Borrada`);
    }
    if (accion === "editar") {
      console.log(accion);
      let modalPersonasEdit = document.querySelector("#modalPersonasEdit");

      if (modalPersonasEdit === null) ModalPersonasEdit(id);
    }
  });
});
