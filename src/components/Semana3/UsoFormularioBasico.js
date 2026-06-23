import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import Margin from "../Semana2/BoxModel/Margin";
import AlignItems from "../Semana2/FlexBox/AlignItems";
import JustifyContent from "../Semana2/FlexBox/JustifyContent";



const UsoFormularioBasico = () => {

  //Declaracion de variables de entradas
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  //Declaracion de variables de resultado
  const [objPersona, setObjPersona] = useState('');

  //Proceso
  const fnRegistrarDatos = () => {
    
    let objPersona = {
      'nombre_alumno': nombre,
      'apellido_alumno': apellido
    }
    setObjPersona(objPersona);
  }

  const fnLimpiarDatos = () => {
    setNombre('');
    setApellido('');
    setObjPersona('');
  }

  //Resultado del proceso
  let resultadoJSX = null;
  if (objPersona != '') {
    // console.log(resultado);
    resultadoJSX =
      <View style={estilos.cajaSalida}>
        <Text>Los datos registrados son:</Text>
        <Text>Nombre: {objPersona.nombre_alumno}</Text>
        <Text>Apellido: {objPersona.apellido_alumno}</Text>
      </View>
  } else {
    resultadoJSX = <View style={estilos.cajaSalida}><Text>No existe Datos Registrados</Text></View>
  }


  return (
    <>
      <View style={estilos.contenedorPrincipal}>

        <View style={estilos.cajaTitulo}>
          <Text style={estilos.textTitulo}>Registrar Personal</Text>
        </View>

        {/* Entradas */}
        <TextInput
          style={estilos.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Ingrese Nombre"
        >
        </TextInput>

        <TextInput
          style={estilos.input}
          value={apellido}
          onChangeText={setApellido}
          placeholder="Ingrese Apellido"
        >
        </TextInput>

        {/* Botones */}
        <View style={estilos.cajaBotones}>
          <TouchableOpacity style={estilos.botonLimpiar} onPress={fnLimpiarDatos}>
            <Text style={estilos.textBotones}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.botonRegistrar} onPress={fnRegistrarDatos}>
            <Text style={estilos.textBotones}>Registrar</Text>
          </TouchableOpacity>
        </View>

        {/* Pintar Resultado */}
        {
          resultadoJSX
        }

      </View>
    </>
  );
}

export default UsoFormularioBasico;


const estilos = StyleSheet.create({

  contenedorPrincipal: {
    padding: 50,
  },

  cajaTitulo: {
    alignItems: 'center',
  },

  textTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 5,
    marginTop: 10,
  },

  cajaBotones: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 5,
    
  },

  botonRegistrar: {
    backgroundColor: 'red',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },

  botonLimpiar: {
    backgroundColor: 'orange',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },

  textBotones: {
    color: 'white',
  },

  cajaSalida: {
    marginTop: 10,
  }


})



