export function FilaPersonas(persona) {
  let tablaPersonas = document.querySelector("#tabla");
  tablaPersonas.innerHTML += `
    <tr id="${persona.id_persona}">
        <td>${persona.id_persona}</td>
        <td>${persona.nombre}</td>
        <td>${persona.telefono}</td>
        <td>${persona.sexo}</td>
        <td>${persona.direccion}</td>
        <td>
          <button data-accion="editar"  class="btn btn-warning">
            <i class="bi bi-pencil-square"></i>
          </button> 
          <button data-accion="eliminar" class="btn btn-danger">
            <i class="bi bi-trash"></i>
          </button>
        </td>
    </tr>
    `;
}
