import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Margin from "../Semana2/BoxModel/Margin";
import AlignItems from "../Semana2/FlexBox/AlignItems";
import JustifyContent from "../Semana2/FlexBox/JustifyContent";



const UsoTouchableOpacity = () => {


  return (
    <>
      <View style={estilos.contenedorPrincipal}>

        <View style={estilos.contenedorTitulo}>
          <Text style={estilos.tituloFormulario}>Uso del Componente</Text>
          <Text style={estilos.tituloFormulario}>TouchableOpacity</Text>
        </View>

        {/* Formato Horizontal: row */}
        <View style={estilos.contenedorHorizontal}>
          <TouchableOpacity style={estilos.btnLimpiar}>
            <Text style={estilos.textoBotones}>Limpiar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.btnRegistrar}>
            <Text style={estilos.textoBotones}>Registrar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
}

export default UsoTouchableOpacity;


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

  contenedorHorizontal: {
    flexDirection: 'row',
    gap: 10,
  },

  btnRegistrar: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
    alignItems: "center"
  },

  btnLimpiar: {
    backgroundColor: 'orange',
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

// En este componente se muestra el uso de TouchableOpacity para crear botones interactivos. 
// El contenedor principal tiene un padding para separar el contenido de los bordes.
// El contenedor de los botones utiliza flexDirection: 'row' para colocarlos horizontalmente y gap para separar los botones.
// gap es una propiedad que se utiliza para definir el espacio entre los elementos hijos, 10 representa el espacio en píxeles entre los botones.
// Se podria haber usado JustifyContent: 'space-between' en el contenedor horizontal para separar los botones, pero se opto por usar gap para mantener un espacio uniforme entre ellos.
// Los botones hijos tienen flex: 1 para que ocupen el mismo espacio dentro del contenedor horizontal, y alignItems: 'center' para centrar el texto dentro de cada botón.
// Se podria haber usado textAlign: 'center' en el estilo del texto de los botones, pero mayormente se recomienda para parrafos, mientras que alignItems: 'center' es más adecuado para centrar contenido dentro de un contenedor, como en este caso con los botones.


