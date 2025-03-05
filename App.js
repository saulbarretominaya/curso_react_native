import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Formulario from './src/components/Formulario';

const App = () => {

  return (
    <View style={styles.contenedor}>
      <Formulario/>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;