import React from 'react';
import { Text, StyleSheet, View } from "react-native";

const Cotizacion = ({ resultado }) => {
    if (Object.keys(resultado).length == 0) return null;
    return (
        <View>
            <Text>El precio del Bitcoin: {resultado.PRICE}</Text>
        </View>
    )
}
const styles = StyleSheet.create({});
export default Cotizacion;