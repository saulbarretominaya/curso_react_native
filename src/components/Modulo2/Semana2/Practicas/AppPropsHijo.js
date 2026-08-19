import { useEffect, useState } from "react"
import { Text, Button, StyleSheet, View, TouchableOpacity } from "react-native"


{/* Aquí recibo todos los, existen dos fomas para recuperar el objetos*/ }
// De forma normal AppPropsHijo = (objeto) => {
// De forma desestructurado AppPropsHijo = ({argumento_1}) => {
const AppPropsHijo = (objeto) => {

    console.log(JSON.stringify(objeto, null, 2));
    console.log(objeto.argumento_6);

    return (
        <>
            <View>
                <Button
                    title="Enviar Mensaje"
                    onPress={() => {objeto.argumento_6("Hola, soy el Hijo 🥶")}}>
                </Button>
            </View>
        </>
    )
}

export default AppPropsHijo