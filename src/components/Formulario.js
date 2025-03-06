import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Formulario = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  return (
    <View style={styles.container}>
      {/* Input en la primera fila */}
      <TextInput
        style={styles.input}
        placeholder="Ingrese texto"
        value={input1}
        onChangeText={setInput1}
      />

      {/* Segunda fila con dos inputs en horizontal */}
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Input 2"
          value={input2}
          onChangeText={setInput2}
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Input 3"
          value={input3}
          onChangeText={setInput3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', // Centrar los elementos en la pantalla
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%', // Para que los inputs ocupen la mitad del ancho
  },
});

export default Formulario;