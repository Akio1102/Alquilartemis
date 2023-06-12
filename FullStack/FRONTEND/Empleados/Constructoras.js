import { getConstructoras } from "./API.js";

addEventListener("DOMContentLoaded", async () => {
  const formConstructoras = document.querySelector("#id_constructora");
  const constructoras = await getConstructoras();
  constructoras.forEach((element) => {
    formConstructoras.innerHTML += `
      <option value="${element.id_constructora}">${element.nombre}</option>
    `;
  });
});
