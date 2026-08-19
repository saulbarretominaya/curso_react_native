import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const AppFunciones = () => {

  //# Creando funciones básicas
  function saludar(nombre) {
    console.log('Bienvenidos al Repaso del curso de: ' + nombre);
  }
  // saludar('React Native');

  //# Creando funciones con Arrow Function
  // Cuando la función devuelve una sola expresión, el retorno es automático y no es necesario escribir "return".
  const suma = () => (5 + 3);
  // console.log(suma());

  // Otro ejemplo de una sola expresión
  const frutas = () => (console.log("¡Hola, soy una manzana!"));
  // frutas();


  // Para devolver un objeto con retorno automático, el objeto debe ir entre paréntesis: ({ })
  const animales = () => ({
    categoria: "Gato",
    codigoMascota: "002",
    nombreMascota: "Michifu",
    descripcion: "¡Michi es muy juguetón!"
  });
  // console.log(animales());


  // También puedo devolver un objeto utilizando "return"
  const coche = () => {
    return {
      marca: "KIA",
      modelo: "Kia Cerato",
      color: "Negro",
      descripcion: "¡Ideal para Ciudad!"
    };
  }
  // console.log(coche());


  // Una función puede recibir otra función como parámetro, esto se usa mucho al usar prev.
  const saludo = (funcion) => {
    funcion();
  }

  saludo(
    () => { console.log("Hola, soy una funcion") }
  );

  return (
    <>
    </>
  )
}

export default AppFunciones

// {}   Bloque de código. Si deseas devolver un valor, debes usar "return".
// ()   Retorno automático de una única expresión. No necesita "return".
// ({}) Retorno automático de un objeto.