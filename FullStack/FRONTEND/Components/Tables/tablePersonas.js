export function TablePersonas() {
  let container = document.querySelector("#container");
  container.innerHTML += `
    <h5 class="card-title fs-2 text-center text-light">Persona</h5>
    <div class="card-text font-monospace fs-6" >
      <table class="table table-dark table-hover mt-1">
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
    </div>
    `;
}
