import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const AppArreglosObjetos = () => {
  // Creando un Arreglo Objetos
  const usuarios = [
    {
      id: 1,
      nombre: "Saul",
      edad: 31,
      activo: true
    },
    {
      id: 2,
      nombre: "Juan",
      edad: 50,
      activo: false
    },
    {
      id: 3,
      nombre: "Adriana",
      edad: 52,
      activo: true
    }
  ];

  // ¿Como obtengo el valor de un arreglo de objeto?
  console.log(usuarios[0].nombre);

  // Ahora si quiero obtener todos los nombres del arreglo del objeto, ¿Como haría?
  // Pues utilizo map para recorrer todo el arreglo del objeto, donde value sera el indice de cada interacción
  // Aqui value es como decir usuarios[0] y luego a traves de . acceso a la propiedad de ese arreglo
  // No contruyo un nuevo arreglo, solo muestro el resultado
  usuarios.map((value) => {
    console.log("El nombre del usuario es: " + value.nombre)
  });

  // ¿Y si deseo transformar ese arreglo en un nuevo array?, 
  // Lo unico que haria, seria llamar a esa constante y utilizar la palabra return
  const nombres = usuarios.map((value) => {
    return value.nombre.toLocaleUpperCase();
  });

  console.log(nombres);

  // Si deseo agregar un nuevo objeto al arreglo, hago lo siguiente
  usuarios.push({
    id: 4,
    nombre: "Pedro",
    edad: 28,
    activo: true
  })

  console.log(JSON.stringify(usuarios, null, 2));

  //Y si deseo crear un nuevo arreglo
  const nuevoUsuario = {
    id: 5,
    nombre: "Victoria",
    edad: 60,
    activo: true
  }

  const nuevoUsuarios = [...usuarios, nuevoUsuario];
  console.log(JSON.stringify(nuevoUsuarios, null, 2));
  return (
    <>

    </>
  )
}

export default AppArreglosObjetos
