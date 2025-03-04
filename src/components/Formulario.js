import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";

const Formulario = () => {
  const [moneda, guardarMoneda] = useState("");
  const [criptomoneda, guardarCriptomoneda] = useState("");
  const obtenerMoneda = (moneda) => {
    console.log(moneda);
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
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    textTransform: "uppercase",
    fontSize: 22,
    marginVertical: 20,
  },
});

export default Formulario;
