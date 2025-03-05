import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Formulario = () => {

  const [nombre, setNombre] = useState(''); // Variables para guardar el nombre
  const [nombreGuardado, setNombreGuardado] = useState(''); // Variable para guardar el nombre despues de ejecutar el evento

  // Función para guardar el nombre
  const EnviarInformacion = () => {
    setNombreGuardado(nombre);
  }

  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Button title="Guardar Nombre" onPress={EnviarInformacion} />

      {nombreGuardado != '' ? <Text>Nombre guardado: {nombreGuardado}</Text> : null}

    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 200,
    marginBottom: 10,
  },
});

export default Formulario;