import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [horas, setHoras] = useState('');
  const [tarifa, setTarifa] = useState('');
  const [resultado, setResultado] = useState('');

  const mostrar = () => {

    const sueldo_basico = horas * tarifa;
    const bonificacion = 0;
    const descuento = 0;
    const sueldo_neto = sueldo_basico + bonificacion - descuento;

    setResultado(
      "Nombre: " + nombre + "\n" +
      "Sueldo Basico: " + sueldo_basico + "\n" +
      "Bonificacion: " + bonificacion + "\n" +
      "Descuento: " + descuento + "\n" +
      "Sueldo Neto: " + sueldo_neto
    );
  };

  return (
    <View style={styles.container}>
      {/* Primer Input */}
      <TextInput
        style={styles.input}
        placeholder="Ingrese Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Contenedor para los dos inputs en horizontal */}
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Ingresa Horas Trabajas"
          value={horas}
          onChangeText={setHoras}
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Ingrese Tarifa Por Hora"
          value={tarifa}
          onChangeText={setTarifa}
        />
      </View>

      {/* Botón para mostrar los valores */}
      <View>
        <Button title='Mostrar' onPress={mostrar} />
      </View>

      {/* Resultado */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{resultado}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', // Centrar en la pantalla
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row', // Acomoda los elementos en una fila
    justifyContent: 'space-between', // Espacio entre los inputs
  },
  halfInput: {
    width: '48%', // Ajustar para que entren dos inputs en una fila
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
  },
});

export default App;