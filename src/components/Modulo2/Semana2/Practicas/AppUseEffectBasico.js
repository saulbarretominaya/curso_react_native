import { useEffect, useState } from "react"
import { Text, Button, StyleSheet, View, TouchableOpacity } from "react-native"


const AppUseEffectBasico = () => {

    // useEffect es un Hook de React que recibe una función, pero puede recibir muchos argumentos.
    // Se ejecuta solo sin que llame a una funcion
    useEffect(() => {
        console.log("Bievenido al Hook de useEffect");
    })


    // Agregmos un nuevo argumento a useEffect, argumento -> 1 function,  argumento 2 un arreglo.
    // A ese arreglo se llama array de dependencias.
    useEffect(() => {
        console.log("Primer argumento");
    }, [])

    return (
        <>
        </>
    )
}

export default AppUseEffectBasico













