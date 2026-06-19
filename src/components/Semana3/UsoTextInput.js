import { View, Text, TextInput } from "react-native";


const UsoTextInput = () => {


  return (
    <>
      <View style={estilos.contenedorPrincipal}>
        <Text style={estilos.tituloFormulario}>Uso del Componente TextInput</Text>
        <Text style={estilos.subTituloFormulario}>Registrar Usuarios</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ingresa Nombres y Apellidos ">
        </TextInput>
        <TextInput
          style={estilos.input}
          placeholder="Ingresa Correo Electronico"
          keyboardType="email-address">
        </TextInput>
        <TextInput
          style={estilos.input}
          placeholder="Ingresa Numero de Celular"
          keyboardType="numeric">
        </TextInput>
        <TextInput
          style={estilos.input}
          placeholder="Ingresa Usuario"
          keyboardType="default">
        </TextInput>
        <TextInput
          style={estilos.input}
          placeholder="Ingresa Contraseña"
          secureTextEntry={true}>
        </TextInput>

      </View>
    </>
  );
}

export default UsoTextInput;


const estilos = {

  contenedorPrincipal: {
    padding: 50,
  },

  tituloFormulario: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red'
  },

  subTituloFormulario: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green'
  },

  input: {
    height: 40,
    borderColor: '#34495e',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  }

}

// El componente TextInput se utiliza para crear campos de entrada de texto en la pantalla.
// Tiene varias propiedades que permiten personalizar su apariencia y comportamiento, como placeholder, keyboardType, secureTextEntry, etc.
// placeholder: Texto que se muestra cuando el campo está vacío.
// keyboardType: Especifica el tipo de teclado que se muestra al enfocar el campo (por ejemplo, email-address, numeric, default).
// secureTextEntry: Si se establece en true, oculta el texto ingresado (útil para contraseñas).



