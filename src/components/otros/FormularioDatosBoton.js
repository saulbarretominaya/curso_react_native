
// import { useState } from 'react';
// import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';


// const FormularioDatos = () => {

//   // Declaración de estado
//   const [nombre, setNombre] = useState('');
//   const [datoGuardado, setDatoGuardado] = useState('');

//   // Proceso
//   const guardarDato = () => {
//     // console.log('Dato guardado:', nombre);
//     Alert.alert('Datos guardado Correctamente');
//     // alert('Datos guardado Correctamente');
//     setDatoGuardado(nombre);
//   }


//   return (
//     <>
//       <View style={estilos.container}>

//         <Text style={estilos.texto}>Formulario Basico</Text>
//         {/* Entradas */}
//         <TextInput
//           style={estilos.input}
//           placeholder='Ingrese su nombre'
//           value={nombre}
//           onChangeText={setNombre}
//         />

//         <TouchableOpacity
//           style={estilos.button}
//           onPress={guardarDato}>
//           <Text style={estilos.buttonText}>Guardar</Text>
//         </TouchableOpacity>

//         {/* Salida */}
//         {datoGuardado !== '' && (
//           <Text style={estilos.texto}>Dato Guardado: {datoGuardado}</Text>
//         )}

//       </View>
//     </>
//   );
// }

// export default FormularioDatos;

// const estilos = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   texto: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginTop: 10,
//     marginHorizontal: 20,
//     borderRadius: 5,
//   },

//   button: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     marginHorizontal: 100,
//     alignItems: 'center',
//     marginTop: 10,
//   },

//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   }


// });


