import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MostrarNombre = ({ nombre }) => {
  return (
    <View>
      <Text style={styles.texto}>Nombre ingresado: {nombre || 'Ninguno'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MostrarNombre;