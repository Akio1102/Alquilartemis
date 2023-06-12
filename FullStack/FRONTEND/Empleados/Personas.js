import { getPersonas } from "./API.js";

addEventListener("DOMContentLoaded", async () => {
  const formEmpleado = document.querySelector("#id_persona");
  const personas = await getPersonas();
  personas.forEach((element) => {
    formEmpleado.innerHTML += `
      <option value="${element.id_persona}">${element.nombre}</option>
    `;
  });
});
