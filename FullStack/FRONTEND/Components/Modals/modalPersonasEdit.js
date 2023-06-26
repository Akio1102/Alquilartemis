export function ModalPersonasEdit(persona) {
  let body = document.querySelector("body");

  let div = document.createElement("div");
  div.setAttribute("class", `modal fade`);
  div.setAttribute("id", "modalPersonasEdit");
  div.setAttribute("data-bs-backdrop", "static");
  div.setAttribute("data-bs-keyboard", "false");
  div.setAttribute("tabindex", "-1");
  div.setAttribute("aria-labelledby", "modalPersonasEditLabel");
  div.setAttribute("aria-hidden", "true");

  div.innerHTML = `
  <div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header bg-title fw-bold">
      <h5 class="modal-title" id="modalPersonasEditLabel">
        Actualizar de Categoria
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <form id="myFormPersonaUpdate">
      <div class="modal-body">
        <div class="row g-3">
          <div class="col-12">
            <label
              for="inputName"
              class="form-label"
              title="Nombre de la Persona"
            >
              Nombre de la Persona
            </label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              name="nombre"
              value="${persona.id_persona}"
              placeholder="Inserte Nombre de la Persona"
              required
            />
          </div>
          <div class="col-12">
            <label
              for="inputTelefono"
              class="form-label"
              title="Telefono de la Persona"
            >
              Telefono de la Persona
            </label>
            <input
              type="number"
              class="form-control"
              id="inputTelefono"
              name="telefono"
              value="${persona.telefono}"
              placeholder="Inserte Telefono de la Persona"
              required
            />
          </div>
          <div class="col-12">
            <label
              for="inputSexo"
              class="form-label"
              title="Telefono de la Persona"
            >
              Sexo de la Persona
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              id="inputSexo"
              name="sexo"
              required
            >
              <option selected>${persona.telefono}}</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </select>
          </div>
          <div class="col-12">
            <label
              for="inputDireccion"
              class="form-label"
              title="Telefono de la Persona"
            >
              Direccion de la Persona
            </label>
            <input
              type="text"
              class="form-control"
              id="inputDireccion"
              name="direccion"
              value="${persona.direccion}"
              placeholder="Inserte direccion de la Persona"
              required
            />
          </div>
        </div>
      </div>
      <input
        type="hidden"
        class="form-control"
        id="Registrar"
        name="registrar"
        value="registrar"
        required
      />
      <div class="modal-footer">
        <input
          type="reset"
          class="btn btn-danger text-dark"
          data-bs-dismiss="modal"
          value="Cerrar"
        />
        <input
          type="submit"
          class="btn btn-warning"
          data-accion="enviar"
          value="Enviar Registro"
        />
      </div>
    </form>
  </div>
</div>
`;
  body.appendChild(div);
}
