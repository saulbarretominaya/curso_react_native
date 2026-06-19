import { View, Text } from "react-native";


const UsoText = () => {

  return (
    <>
      <View style={estilos.contenedorPrincipal}>
        <Text style={estilos.tituloFormulario}>Uso del Componente Text</Text>
        <Text style={estilos.datosPersonal}>Nombre: Saul</Text>
        <Text style={estilos.datosPersonal}>Apellido Paterno: Barreto </Text>
        <Text style={estilos.datosPersonal}>Apellido Materno: Minaya </Text>
      </View>
    </>
  );
}

export default UsoText;

const estilos = {

  contenedorPrincipal: {
    padding: 50,
    alignItems: 'center',
  },

  tituloFormulario: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red'
  },

  datosPersonal: {
    fontSize: 16,
    marginBottom: 10,
  }

}

// El componente Text se utiliza para mostrar texto en la pantalla. 
// Permite aplicar estilos y formateo al texto, como cambiar el tamaño, color, fuente, etc. 
// Es un componente fundamental para mostrar información en una aplicación React Native.




