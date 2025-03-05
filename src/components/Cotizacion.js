import React from 'react';
import { Text, StyleSheet, View } from "react-native";

const Cotizacion = ({ resultado }) => {
    if (Object.keys(resultado).length === 0) return null;
    return (
        <View>
            <Text>El precio del Bitcoin: {resultado.PRICE}</Text>
            <Text>Precio más alto del día: {resultado.HIGHDAY}</Text>
            <Text>Precio más bajo del día: {resultado.LOWDAY}</Text>
            <Text>Variación últimas 24 horas: {resultado.CHANGEPCT24HOUR} %</Text>
            <Text>Última actualización: {resultado.LASTUPDATE}</Text>
        </View>
    )
}
const styles = StyleSheet.create({});
export default Cotizacion;