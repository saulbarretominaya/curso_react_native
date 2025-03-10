import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text } from "react-native";
import Header from './src/components/Header';
import Formulario from './src/components/Formulario';
import axios from 'axios';
import Cotizacion from './src/components/Cotizacion';

const App = () => {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        console.log(resultado.data.DISPLAY[criptomoneda][moneda]);
        if (resultado.data.DISPLAY && resultado.data.DISPLAY[criptomoneda] && resultado.data.DISPLAY[criptomoneda][moneda]) {
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
        } else {
          guardarResultado({});
        }
        guardarConsultarAPI(false);
      }
    }
    cotizarCriptomoneda();
  }, [consultarAPI]);

  return (
    <>
      <Header />
      <View style={styles.contenido}>
        <Formulario
          moneda={moneda}
          criptomoneda={criptomoneda}
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
          guardarConsultarAPI={guardarConsultarAPI}
        />
        <Cotizacion resultado={resultado} />
      </View>
    </>
  );
}

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
