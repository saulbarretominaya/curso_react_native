import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text } from "react-native";
import Header from './src/components/Header';
import Formulario from './src/components/Formulario';
import axios from 'axios';

const App = () => {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        console.log(resultado.data.DISPLAY[criptomoneda][moneda]);
        guardarConsultarAPI(false);
      }
    }
    cotizarCriptomoneda();
  }, [consultarAPI]);

  return (
    <>
      <Header />
      <Image style={styles.imagen} source={require("./assets/img/cryptomonedas.png")} />
      <View style={styles.contenido}>
        <Formulario
          moneda={moneda}
          criptomoneda={criptomoneda}
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
          guardarConsultarAPI={guardarConsultarAPI}
        />
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
