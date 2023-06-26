import { FilaPersonas } from "../Components/Trs/trPersonas.js";
import { GETPersonas, POSTPersonas } from "../API/Consumo_API.js";

export const viewPersonas = async () => {
  try {
    let personas = await GETPersonas();
    if (personas == false) {
      alert(`No hay Personas`);
    } else {
      personas.forEach((element) => {
        FilaPersonas(element);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const sendPersonas = async (e) => {
  try {
    let data = Object.fromEntries(new FormData(e.target));
    if (data == false) {
      console.log(`No Puede Enviar Datos Vacios Personas`);
    } else {
      const datos = await POSTPersonas(data);
      console.log(datos);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deletePersona = async (e) => {
  try {
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    // if (data == false) {
    //   console.log(`No Puede Enviar Datos Vacios Personas`);
    // } else {
    //   const datos = await DELETEPersonas(data);
    //   console.log(datos);
    // }
  } catch (error) {
    console.log(error);
  }
};
