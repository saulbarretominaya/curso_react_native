import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import Margin from "../Semana2/BoxModel/Margin";
import AlignItems from "../Semana2/FlexBox/AlignItems";
import JustifyContent from "../Semana2/FlexBox/JustifyContent";



const UsoUseState = () => {

  const [mensaje, setMensaje] = useState("");


  const fnMostrarMensaje = () => {
    console.log(mensaje);
    alert(mensaje);
  }
 
  return (
    <>
      <View style={estilos.contenedorPrincipal}>

        <View style={estilos.contenedorTitulo}>
          <Text style={estilos.tituloFormulario}>Uso del Componente</Text>
          <Text style={estilos.tituloFormulario}>Use State</Text>
        </View>

        <TextInput
          style={estilos.input}
          placeholder="Ingresa un Mensaje"
          onChangeText={setMensaje}
          value={mensaje}
        >
        </TextInput>

        {/* Formato Horizontal: row */}
        <View style={estilos.contenedorVertical}>
          <TouchableOpacity style={estilos.btnMostrarMensaje} onPress={fnMostrarMensaje}>
            <Text style={estilos.textoBotones}>Mostrar Mensaje</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text> {mensaje} </Text>
        </View>

      </View>
    </>
  );
}

export default UsoUseState;


const estilos = StyleSheet.create({

  contenedorPrincipal: {
    padding: 50,
  },

  contenedorTitulo: {
    alignItems: 'center',
  },

  tituloFormulario: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
    marginBottom: 10,
  },

  input: {
    height: 40,
    borderColor: '#34495e',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  contenedorVertical: {
    flexDirection: 'column',
    height: 50,
  },

  btnMostrarMensaje: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
    alignItems: "center"
  },

  textoBotones: {
    color: 'white',
  },

})

// useState: Es un hook que permite agregar estado a los componentes funcionales en React.
// onChangeText: Es un evento que se utiliza en componentes como los TextInput para capturar lo que escribe el usuario.
// setMensaje: Es la función que se utiliza para actualizar el valor del estado mensaje.
// Las variables que se crean con useState son inmutables, es decir, no se pueden modificar directamente, sino que se debe utilizar la función de actualización correspondiente (en este caso, setMensaje) para cambiar su valor.
// las variables que estan dentro del JSX siempre deben ir entre llaves {} para que React las interprete como variables y no como texto plano.



