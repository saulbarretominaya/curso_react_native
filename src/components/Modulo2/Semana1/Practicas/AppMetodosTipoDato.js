import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppMetodosTipoDato = () => {


    // texto es un String y toUpperCase() es un método del tipo String.
    const texto = "hola";
    texto.toUpperCase();


    // json()  Método de un objeto
    const respuesta = {
        json: function () {
            return {
                nombre: "Saúl",
                edad: 30
            };
        }
    };

    const data = respuesta.json();


    return (
        <>
        </>
    )
}

export default AppMetodosTipoDato

const styles = StyleSheet.create({})