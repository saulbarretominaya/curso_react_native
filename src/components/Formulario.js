import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableHighlight, Alert } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

import axios from "axios";

const Formulario = ({ moneda, criptomoneda, guardarMoneda, guardarCriptomoneda, guardarConsultarAPI }) => {

  const [criptomonedas, guardarCriptomonedas] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      // guardarCriptomonedas(resultado.data.Data);
      if (resultado.data && resultado.data.Data) {
        guardarCriptomonedas(resultado.data.Data);
      } else {
        guardarCriptomonedas([]);
      }
    }

    consultarAPI();
  }, []);

  const obtenerMoneda = (moneda) => {
    guardarMoneda(moneda);
  }

  const obtenerCriptomoneda = cripto => {
    guardarCriptomoneda(cripto);
  }

  const CotizarPrecio = () => {
    if (moneda.trim() === '' || criptomoneda.trim() === '') {
      mostrarAlerta();
      return;
    }
    guardarConsultarAPI(true);
  }

  const mostrarAlerta = () => {
    Alert.alert(
      'Error...',
      'Ambos campos son obligatorios',
      [
        { text: 'OK' }
      ]
    )
  }

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>

      <RNPickerSelect
        onValueChange={(moneda) => obtenerMoneda(moneda)}
        items={[
          { label: "Dólar de EEUU", value: "USD" },
          { label: "Euro", value: "EUR" },
          { label: "Libra Esterlina", value: "GBP" },
          { label: "Peso Mexicano", value: "MXN" },
        ]}
        placeholder={{ label: "-Seleccionar-", value: "" }}
      />

      <Text style={styles.label}> Criptomoneda </Text>

      <RNPickerSelect
        onValueChange={(cripto) => obtenerCriptomoneda(cripto)}
        items={
          Array.isArray(criptomonedas)
            ? criptomonedas.map((cripto) => ({
              label: cripto.CoinInfo.FullName,
              value: cripto.CoinInfo.Name,
            }))
            : []
        }
        placeholder={{ label: "-Seleccionar-", value: "" }}
        style={{ inputIOS: { height: 120 }, inputAndroid: { height: 120 } }}
      />

      <TouchableHighlight style={styles.btnCotizar}
        onPress={() => CotizarPrecio()}>
        <Text style={styles.textoCotizar}>Cotizar</Text>
      </TouchableHighlight>


    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    textTransform: "uppercase",
    fontSize: 22,
    marginVertical: 20,
  },
  btnCotizar: {
    backgroundColor: "#5E49E2",
    padding: 10,
    marginTop: 20,
  },
  textoCotizar: {
    color: "#FFF",
    fontSize: 18,
    textTransform: "uppercase",
    textAlign: "center",
  }

});

export default Formulario;
