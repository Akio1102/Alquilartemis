import { getEmpleados } from "./API.js";

addEventListener("DOMContentLoaded", async () => {
  const tablaPersonas = document.querySelector("#tabla");
  const personas = await getEmpleados();
  personas.forEach((element) => {
    tablaPersonas.innerHTML += `
    <tr>
      <th scope="row">${element.id_empleado}</th>
       <td>${element.nombre}</td>
       <td>${element.telefono}</td>
       <td>${element.usuario}</td>
       <td>${element.nombre_constructora}</td>
       <td><button type="button" class="btn btn-info" id="detalle">Notas</button></td>
    </tr>
    `;
  });
});
