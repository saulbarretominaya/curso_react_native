import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const AppArreglos = () => {


  // Creando un arreglo Basico
  const arrayNumeros = [1, 2, 3, 4, 5, 6];

  // Uso de Map
  console.log("El primer parametro, imprime el valor del array:");
  arrayNumeros.map((value) => {
    console.log(value);
  });

  console.log("El segundo parametro, imprime el índice del array, siempre empieza con la posición 0:");
  arrayNumeros.map((value, index) => {
    console.log(index);
  });

  console.log("El tercer parametro, imprime todo el Array:");
  arrayNumeros.map((value, index, array) => {
    console.log(array);
  });

  // Comparacion de map con forEach
  console.log("Recorriendo y retornando un nuevo Array con map:");
  const arrayForEach = arrayNumeros.map(function (value, index, array) {
    return value + 1;
  });
  console.log(arrayForEach);

  console.log("Recorriendo y retornando un nuevo Array con forEach:");
  const arrayMap = arrayNumeros.forEach(function (value, index, array) {
    return value + 1;
  });
  console.log(arrayMap);

  console.log("Recorriendo y retornando un nuevo Array con filter:");
  const arrayFilter = arrayNumeros.filter((value) => {
    // Devuelvo solo los valores mayores a 3
    // return value > 3;
    // ¿Si deseo eliminar el valor 1 del array -> [1, 2, 3, 4, 5, 6] que haria?
    // return value == 1;  // Mal ❌, porque solo devolveria 1.
    // Siempre debes preguntarte lo siguiente:
    // ¿El valor del array 1 es igual a 1? Si, "Verdadero" por lo tanto llena el array y se acumula asi[1]
    // ¿El valor del array 2 es igual a 1? No, "Falso", por lo tanto no llena en el arrayFilter y su acumulacion queda en [1]
    // ¿El valor del array 3 es igual a 1? No, "Falso", por lo tanto no llena en el arrayFilter y su acumulacion queda en [1]
    // etc ...
    return value != 1
    // Aquí pasa todo lo contrario, volvemos a preguntar:
    // ¿El valor del array 1 es diferente de 1? No, "Falso" por lo tanto no llena en el arrayFilter y se queda asi []
    // ¿El valor del array 2 es diferente de 1? Si, "Verdadero" por lo tanto llena el arrayFilter y se acumula asi [2]
    // ¿El valor del array 3 es diferente de 1? Si, "Verdadero" por lo tanto llena el arrayFilter y se acumula asi [2,3]
    // ¿El valor del array 4 es diferente de 1? Si, "Verdadero" por lo tanto llena el arrayFilter y se acumula asi [2,3,4]
    // etc ...
  })
  console.log(arrayFilter);

  return (
    <>

    </>
  )
}

export default AppArreglos


// Antiguamente:
// arrayNumeros.forEach(function (value, index, array) {
//   console.log(value)
// });

// arrayNumeros
//    ↓
//    map(), filter()
//    ↓
// recorre cada array
//    ↓
// return un nuevo valor
//    ↓
// construye un NUEVO ARRAY