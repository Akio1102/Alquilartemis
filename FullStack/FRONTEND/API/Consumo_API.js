const headers = new Headers({ "Content-Type": "application/json" });
const URL = `http://localhost/Alquilartemis/FullStack/BACKEND/Controllers`;

// Geters
export const GETPersonas = async () => {
  try {
    const result = await fetch(`${URL}/Personas/getPersonas.php`);
    const datos = await result.json();
    return datos;
  } catch (error) {
    console.log(error);
  }
};

export const GETConstructoras = async () => {
  try {
    const result = await fetch(`${URL}/Empleados/getConstructoras.php`);
    const datosConstructoras = await result.json();
    return datosConstructoras;
  } catch (error) {
    console.log(error);
  }
};

export const GETEmpleados = async () => {
  try {
    const result = await fetch(`${URL}/Empleados/getEmpleados.php`);
    const datosEmpleados = await result.json();
    return datosEmpleados;
  } catch (error) {
    console.log(error);
  }
};

export async function POSTPersonas(event) {
  let config = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(event),
  };
  try {
    let peticion = await fetch(`${URL}/Personas/registrarPersonas.php`, config);
    datos = await peticion.json();
  } catch (error) {
    console.log(error);
  }
}
