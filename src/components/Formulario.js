import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableHighlight, Alert } from "react-native";
import { Picker } from "@react-native-community/picker";
import axios from "axios";

const Formulario = ({moneda,criptomoneda,guardarMoneda,guardarCriptomoneda,guardarConsultarAPI}) => {

  const [criptomonedas, guardarCriptomonedas] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USM';
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
    if(moneda.trim() === '' || criptomoneda.trim() === '') {
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

      <Picker
        selectedValue={moneda}
        onValueChange={(moneda) => obtenerMoneda(moneda)}
      >
        <Picker.Item label="-Seleccionar-" value="" />
        <Picker.Item label="Dolar de EEUU" value="USD" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
      </Picker>

      <Text style={styles.label}> Criptomoneda </Text>

      <Picker
        selectedValue={criptomoneda}
        onValueChange={cripto => obtenerCriptomoneda(cripto)}
        itemStyle={{ height: 120 }}>
        <Picker.Item label="-Seleccionar-" value="" />
        {/* {criptomonedas.map(cripto => ( */}
        {Array.isArray(criptomonedas) && criptomonedas.map(cripto => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name} />
        ))}
      </Picker>

      <TouchableHighlight style={styles.btnCotizar}
        onPress={() => CotizarPrecio()}>
        <Text style={styles.textoCotizar}>Cotizar</Text>
      </TouchableHighlight>

      <Text> Cotizar </Text>

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
