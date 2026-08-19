import { StyleSheet, Text, View } from 'react-native'

const AppObjetos = () => {

  //Creando el Objeto Persona
  const objPersona = {
    nombre: "R. Saul",
    apellido: "Barreto Minaya",
    direccion: {
      distrito: 'Lima',
      calle: 'Calle Los Girasoles'
    },
    edad: 31,
    sexo: "M",
    estadoCivil: "Soltero"
  }

  // Imprimiendo el Objeto
  // console.log(objPersona);

  // Imprimiendo una propiedad del Objeto
  // console.log(objPersona.nombre);

  // Accediendo a una propiedad de un objeto anidado
  // console.log(objPersona.direccion.calle);

  // Convertirmos un objeto JavaScript a un Formato JSON para que sea fácil de leer.
  // console.log(JSON.stringify(objPersona, null, 2));

  return (
    <>
      
    </>
  )
}

export default AppObjetos

// JSON.stringify()
// Convierte un objeto de JavaScript en una cadena de texto con formato JSON.
// Parámetros:
// 1. Objeto que se desea convertir.
// 2. null: no modifica ni filtra las propiedades.
// 3. 2: agrega una sangría de 2 espacios para que el JSON sea más legible.