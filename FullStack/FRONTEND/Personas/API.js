const url =
  "http://localhost/Alquilartemis/FullStack/BACKEND/Controllers/Personas/";

export const getPersonas = async () => {
  try {
    const result = await fetch(url + `getPersonas.php`);
    const datosPersonas = await result.json();
    return datosPersonas;
  } catch (error) {
    console.log(error);
  }
};
