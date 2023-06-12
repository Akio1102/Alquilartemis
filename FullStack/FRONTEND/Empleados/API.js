const url =
  "http://localhost/Alquilartemis/FullStack/BACKEND/Controllers/Empleados/";

export const getPersonas = async () => {
  try {
    const result = await fetch(url + `getPersonas.php`);
    const datosPersonas = await result.json();
    return datosPersonas;
  } catch (error) {
    console.log(error);
  }
};

export const getConstructoras = async () => {
  try {
    const result = await fetch(url + `getConstructoras.php`);
    const datosConstructoras = await result.json();
    return datosConstructoras;
  } catch (error) {
    console.log(error);
  }
};

export const getEmpleados = async () => {
  try {
    const result = await fetch(url + `getEmpleados.php`);
    const datosEmpleados = await result.json();
    return datosEmpleados;
  } catch (error) {
    console.log(error);
  }
};
