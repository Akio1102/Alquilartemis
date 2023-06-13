export function TablePersonas() {
  let container = document.querySelector("#container");
  container.innerHTML += `
    <table class="table table-hover mt-1">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Telefono</th>
            <th scope="col">Sexo</th>
            <th scope="col">Dirección</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody id="tabla"></tbody>
    </table>
    `;
}
