// import React, { useState } from 'react';

// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     StyleSheet
// } from 'react-native';

// export default function App() {

//     // Estado
//     const [nombre, setNombre] = useState('');

//     // Estado para mostrar datos
//     const [datoGuardado, setDatoGuardado] = useState('');



//     // Función guardar

//     const guardarDato = () => {

//         setDatoGuardado(nombre);

//     };



//     return (

//         <View style={styles.container}>


//             <Text style={styles.titulo}>
//                 Formulario Básico
//             </Text>



//             <TextInput
//                 style={styles.input}

//                 placeholder='Ingrese su nombre'

//                 value={nombre}

//                 onChangeText={setNombre}
//             />



//             <TouchableOpacity
//                 style={styles.button}

//                 onPress={guardarDato}
//             >

//                 <Text style={styles.buttonText}>
//                     Guardar
//                 </Text>

//             </TouchableOpacity>



//             {
//                 datoGuardado !== '' && (

//                     <Text style={styles.resultado}>

//                         Nombre Guardado:
//                         {datoGuardado}

//                     </Text>

//                 )
//             }

//         </View>

//     );
// }

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 20,
//     },

//     titulo: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//     },

//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 8,
//         height: 50,
//         paddingHorizontal: 10,
//         marginBottom: 20,
//     },

//     button: {
//         backgroundColor: 'blue',
//         padding: 15,
//         borderRadius: 8,
//     },

//     buttonText: {
//         color: 'white',
//         textAlign: 'center',
//         fontWeight: 'bold',
//     },

//     resultado: {
//         marginTop: 30,
//         fontSize: 18,
//         textAlign: 'center',
//     },

// });




// import {
//     ScrollView,
//     StyleSheet,
//     Image,
//     Text,
//     View,
//     TextInput,
//     TouchableOpacity
// } from 'react-native';

// import React, { useState } from 'react';

// const FormularioAlumno = () => {

//     // =========================
//     // useState
//     // =========================
//     // Permite guardar información temporalmente
//     // dentro del componente

//     const [nombreApellido, setNombreApellido] = useState('');
//     const [correo, setCorreo] = useState('');
//     const [dni, setDni] = useState('');
//     const [telefono, setTelefono] = useState('');
//     const [carrera, setCarrera] = useState('');

//     // Estado para guardar todos los datos
//     const [datosGuardados, setDatosGuardados] = useState(null);

//     // =========================
//     // handleInputChange
//     // =========================
//     // Función reutilizable para actualizar
//     // los diferentes estados según el input
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



//     // =========================
//     // guardarDatos
//     // =========================
//     // Guarda la información ingresada
//     // dentro del objeto datos
//     const guardarDatos = () => {
//         const datos = {
//             nombreApellido,
//             correo,
//             dni,
//             telefono,
//             carrera

//         };

//         // Guardamos el objeto en el estado
//         setDatosGuardados(datos);
//         console.log('Datos guardados:', datos);
//         alert('Datos guardados');
//     }



//     // =========================
//     // limpiarDatos
//     // =========================
//     // Reinicia todos los estados
//     const limpiarDatos = () => {
//         setNombreApellido('');
//         setCorreo('');
//         setDni('');
//         setTelefono('');
//         setCarrera('');
//         // Eliminamos los datos guardados
//         setDatosGuardados(null);
//         console.log('Datos limpiados');
//     }

//     return (

//         // ScrollView permite desplazamiento vertical
//         // cuando el contenido supera el tamaño de pantalla
//         <ScrollView contentContainerStyle={styles.container}>
//             {/* Imagen opcional */}
//             {/* 
//             <Image 
//                 source={{ uri: 'URL_IMAGEN' }} 
//                 style={styles.image} 
//             /> 
//             */}

//             {/* Títulos */}

//             <Text style={styles.titulo}>
//                 TOOLS
//             </Text>

//             <Text style={styles.subTitulo}>
//                 Datos del Alumno
//             </Text>



//             {/* =========================
//                 INPUT NOMBRE
//             ========================= */}

//             <TextInput
//                 style={styles.input}

//                 placeholder='Nombre y Apellido'

//                 // value conecta el input con el estado
//                 value={nombreApellido}

//                 // onChangeText captura lo escrito
//                 onChangeText={(text) =>
//                     handleInputChange('nombreApellido', text)
//                 }
//             />



//             {/* =========================
//                 INPUT CORREO
//             ========================= */}

//             <TextInput
//                 style={styles.input}

//                 placeholder='Correo'

//                 value={correo}

//                 onChangeText={(text) =>
//                     handleInputChange('correo', text)
//                 }

//                 // keyboardType cambia el tipo de teclado
//                 keyboardType='email-address'
//             />



//             {/* =========================
//                 INPUT DNI
//             ========================= */}

//             <TextInput
//                 style={styles.input}

//                 placeholder='Numero de DNI'

//                 value={dni}

//                 onChangeText={(text) =>
//                     handleInputChange('dni', text)
//                 }

//                 keyboardType='number-pad'
//             />



//             {/* =========================
//                 INPUT TELEFONO
//             ========================= */}

//             <TextInput
//                 style={styles.input}

//                 placeholder='Numero de Teléfono'

//                 value={telefono}

//                 onChangeText={(text) =>
//                     handleInputChange('telefono', text)
//                 }

//                 keyboardType='phone-pad'
//             />



//             {/* =========================
//                 INPUT CARRERA
//             ========================= */}

//             <TextInput
//                 style={styles.input}

//                 placeholder='Carrera profesional'

//                 value={carrera}

//                 onChangeText={(text) =>
//                     handleInputChange('carrera', text)
//                 }
//             />



//             {/* =========================
//                 BOTONES
//             ========================= */}

//             <View style={styles.buttonRow}>


//                 {/* BOTON GUARDAR */}

//                 <TouchableOpacity
//                     style={styles.buttonGuardar}

//                     // onPress ejecuta la función
//                     onPress={guardarDatos}
//                 >

//                     <Text style={styles.buttonText}>
//                         Guardar
//                     </Text>

//                 </TouchableOpacity>



//                 {/* BOTON LIMPIAR */}

//                 <TouchableOpacity
//                     style={styles.buttonLimpiar}

//                     onPress={limpiarDatos}
//                 >

//                     <Text style={styles.buttonText}>
//                         Limpiar
//                     </Text>

//                 </TouchableOpacity>

//             </View>



//             {/* =========================
//                 RENDERIZADO CONDICIONAL
//             ========================= */}

//             {
//                 datosGuardados && (

//                     <View style={styles.datosContainer}>

//                         <Text style={styles.datosTitulo}>
//                             Datos Guardados:
//                         </Text>

//                         <Text>
//                             Nombre y Apellido:
//                             {datosGuardados.nombreApellido}
//                         </Text>

//                         <Text>
//                             Correo:
//                             {datosGuardados.correo}
//                         </Text>

//                         <Text>
//                             DNI:
//                             {datosGuardados.dni}
//                         </Text>

//                         <Text>
//                             Teléfono:
//                             {datosGuardados.telefono}
//                         </Text>

//                         <Text>
//                             Carrera:
//                             {datosGuardados.carrera}
//                         </Text>

//                     </View>

//                 )
//             }

//         </ScrollView>

//     )
// }

// export default FormularioAlumno;