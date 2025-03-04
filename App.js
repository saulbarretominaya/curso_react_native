import React from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text } from "react-native";
import Header from './src/components/Header';
import Formulario from './src/components/Formulario';

const App = () => {
  return (
    <>
      <Header />
      <Image style={styles.imagen} source={require("./assets/img/cryptomonedas.png")} />
      <View style={styles.contenido}>
        <Formulario />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: "100%",
    height: 150,
    marginHorizontal: "2.5%",
  },
  contenido: {
    marginHorizontal: "2.5%",
  },
});

export default App;
