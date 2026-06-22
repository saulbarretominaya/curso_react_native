import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import Margin from "../Semana2/BoxModel/Margin";
import AlignItems from "../Semana2/FlexBox/AlignItems";
import JustifyContent from "../Semana2/FlexBox/JustifyContent";



const UsoOnPress = () => {
  
  const fnMostrarMensaje = () => {
    alert("Hola soy el evento OnPress");
  }

  return (
    <>
      <View style={estilos.contenedorPrincipal}>

        <View style={estilos.contenedorTitulo}>
          <Text style={estilos.tituloFormulario}>Uso del Evento</Text>
          <Text style={estilos.tituloFormulario}>On Press</Text>
        </View>

        {/* Formato Horizontal: row */}
        <View style={estilos.contenedorVertical}>
          <TouchableOpacity style={estilos.btnMostrarMensaje} onPress={fnMostrarMensaje}>
            <Text style={estilos.textoBotones}>Mostrar Mensaje</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default UsoOnPress;


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

// onPress: Es un evento que se utiliza en componentes como TouchableOpacity para detectar cuando el usuario presiona el botón. 
// onChangeText: Es un evento que se utiliza en componentes como los TextInput para capturar lo que escribe el usuario.

