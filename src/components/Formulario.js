import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Formulario = () => {
    return (
        <View>
            <Text style={style.label}>Moneda</Text>
            <Text style={StyleSheet.label}>Criptomoneda</Text>
        </View>
    );
}

const style = StyleSheet.create({
    label: {
        textTransform: "uppercase",
        fontSize: 22,
        marginVertical: 20
    }
});


export default Formulario;;
