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
  const [resultado, setResultado] = useState('');

  //Proceso
  const registrarDatos = () => {
    setResultado({
      'nombre_alumno': nombre,
      'apellido_alumno': apellido
    });

    // Esto no se usa porque se sobreescribe el resultado, se pierde el valor anterior.
    // setResultado(nombre);
    // setResultado(apellido);
  }

  const limpiarDatos = () => {
    setNombre('');
    setApellido('');
    setResultado('');
  }

  //Resultado del proceso
  let resultadoJSX = null;
  if (resultado != '') {
    // console.log(resultado);
    resultadoJSX =
      <View style={estilos.cajaSalida}>
        <Text>Los datos registrados son:</Text>
        <Text>Nombre: {resultado.nombre_alumno}</Text>
        <Text>Apellido: {resultado.apellido_alumno}</Text>
      </View>

  } else {
    resultadoJSX = <Text>No existe Datos Registrados</Text>
  }


  return (
    <>
      <View style={estilos.contenedorPrincipal}>

        <View style={estilos.cajaTitulo}>
          <Text style={estilos.textTitulo}>Registrar Alumnos</Text>
        </View>

        {/* Entradas */}
        <TextInput
          style={estilos.input}
          value={nombre}
          placeholder="Ingrese su Nombre"
          onChangeText={setNombre}
        >
        </TextInput>

        <TextInput
          style={estilos.input}
          value={apellido}
          placeholder="Ingrese su Apellido"
          onChangeText={setApellido}
        >
        </TextInput>


        {/* Interracion del Proceso */}
        <View style={estilos.cajaBotones}>
          <TouchableOpacity
            style={estilos.botonLimpiar}
            onPress={limpiarDatos}
          >
            <Text style={estilos.textLimpiar}>Limpiar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={estilos.botonRegistrar}
            onPress={registrarDatos}
          >
            <Text style={estilos.textRegistrar}>Registrar</Text>
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
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-evenly'
  },

  botonLimpiar: {
    backgroundColor: 'orange',
    width: '100',
    height: '40',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  textLimpiar: {
    color: 'white',
  },

  botonRegistrar: {
    backgroundColor: 'red',
    width: '100',
    height: '40',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  textRegistrar: {
    color: 'white',
  },

  cajaSalida: {
    marginTop: 20,
    alignItems: 'center',
  }


})



