// import { ScrollView, StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'

//     // <SafeAreaView style={{ flex: 1 }}>

//     //   {/* Renderizamos el componente FormularioAlumno */}
//     //   <FormularioAlumno />

//     // </SafeAreaView>


// const FormularioAlumno = () => {

//     const [nombreApellido, setNombreApellido] = useState('');
//     const [correo, setCorreo] = useState('');
//     const [dni, setDni] = useState('');
//     const [telefono, setTelefono] = useState('');
//     const [carrera, setCarrera] = useState('');
//     const [datosGuardados, setDatosGuardados] = useState(null);


//     const handleInputChange = (name, value) => {
//         switch (name) {
//             case 'nombreApellido':
//                 setNombreApellido(value);
//                 break;
//             case 'correo':
//                 setCorreo(value);
//                 break;
//             case 'dni':
//                 setDni(value);
//                 break;
//             case 'telefono':
//                 setTelefono(value);
//                 break;
//             case 'carrera':
//                 setCarrera(value);
//                 break;
//             default:
//                 break;
//         };
//     }

//     const guardarDatos = () => {
//         const datos = {
//             nombreApellido,
//             correo,
//             dni,
//             telefono,
//             carrera
//         };
//         setDatosGuardados(datos);
//         console.log('Datos guardados:', datos);
//         alert('Datos guardados');
//     }

//     const limpiarDatos = () => {
//         setNombreApellido('');
//         setCorreo('');
//         setDni('');
//         setTelefono('');
//         setCarrera('');
//         setDatosGuardados(null);
//         console.log('Datos limpiados');
//     }

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6RmK6F55jOVfw46uTgpYd2HhxtGUy4OCRw&s' }} style={styles.image} />

//             {/* <Text style={styles.titulo}>INSTITUTO SISE</Text> */}
//             <Text style={styles.titulo}>TOOLS</Text>
//             <Text style={styles.subTitulo}>Datos del Alumno</Text>

//             <TextInput
//                 style={styles.input}
//                 placeholder='Nombre y Apellido'
//                 value={nombreApellido}
//                 onChangeText={(text) => handleInputChange('nombreApellido', text)}
//             ></TextInput>
//             <TextInput
//                 style={styles.input}
//                 placeholder='Correo'
//                 value={correo}
//                 onChangeText={(text) => handleInputChange('correo', text)}
//                 keyboardType='email-address'
//             ></TextInput>
//             <TextInput
//                 style={styles.input}
//                 placeholder='Numero de DNI'
//                 value={dni}
//                 onChangeText={(text) => handleInputChange('dni', text)}
//                 keyboardType='number-pad'
//             ></TextInput>

//             <TextInput
//                 style={styles.input}
//                 placeholder='Numero de Teléfono'
//                 value={telefono}
//                 onChangeText={(text) => handleInputChange('telefono', text)}
//                 keyboardType='phone-pad'
//             ></TextInput>

//             <TextInput
//                 style={styles.input}
//                 placeholder='Carrera profesional'
//                 value={carrera}
//                 onChangeText={(text) => handleInputChange('carrera', text)}
//             ></TextInput>

//             <View style={styles.buttonRow}>
//                 <TouchableOpacity style={styles.buttonGuardar} onPress={guardarDatos}>
//                     <Text style={styles.buttonText}>Guardar</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.buttonLimpiar} onPress={limpiarDatos}>
//                     <Text style={styles.buttonText}>Limpiar</Text>
//                 </TouchableOpacity>
//             </View>

//             {datosGuardados && (
//                 <View style={styles.datosContainer}>
//                     <Text style={styles.datosTitulo}>Datos Guardados:</Text>
//                     <Text>Nombre y Apellido: {datosGuardados.nombreApellido}</Text>
//                     <Text>Correo: {datosGuardados.correo}</Text>
//                     <Text>DNI: {datosGuardados.dni}</Text>
//                     <Text>Teléfono: {datosGuardados.telefono}</Text>
//                     <Text>Carrera: {datosGuardados.carrera}</Text>
//                 </View>
//             )}

//         </ScrollView>

//     )
// }



// export default FormularioAlumno;

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 12,
//         backgroundColor: '#f5f5f5',
//     },

//     image: {
//         width: '100%',
//         height: 120,
//         marginBottom: 20,
//         // resizeMode: 'contain',
//     },
//     titulo: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         color: '#2c3e50',
//     },

//     subTitulo: {
//         fontSize: 18,
//         marginBottom: 20,
//         color: '#34495e',
//     },

//     input: {
//         width: '100%',
//         height: 40,
//         borderColor: '#dbc3c7',
//         borderWidth: 1,
//         borderRadius: 8,
//         marginBottom: 15,
//         paddingHorizontal: 10,
//         backgroundColor: 'white',
//     },

//     buttonRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//         marginBottom: 20
//     },

//     buttonGuardar: {
//         flex: 1,
//         backgroundColor: '#e74c3c',
//         paddingVertical: 12,
//         borderRadius: 8,
//         marginRight: 10,
//     },

//     buttonLimpiar: {
//         flex: 1,
//         backgroundColor: '#3498db',
//         paddingVertical: 12,
//         borderRadius: 8,
//         marginLeft: 10,
//     },

//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },

//     datosContainer: {
//         marginTop: 20,
//         padding: 15,
//         backgroundColor: '#ecf0f1',
//         borderRadius: 8,
//         width: '100%',
//     },

//     datosTitulo: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         color: '#2c3e50',
//     },
// });