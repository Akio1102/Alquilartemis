import { getPersonas } from "./API.js";

addEventListener("DOMContentLoaded", async () => {
  const tablaPersonas = document.querySelector("#tabla");
  const personas = await getPersonas();
  personas.forEach((element) => {
    tablaPersonas.innerHTML += `
    <tr>
      <th scope="row">${element.id_persona}</th>
       <td>${element.nombre}</td>
       <td>${element.telefono}</td>
       <td>${element.sexo}</td>
       <td>${element.direccion}</td>
       <td><button type="button" class="btn btn-info" id="detalle">Notas</button></td>
    </tr>
    `;
  });
});
