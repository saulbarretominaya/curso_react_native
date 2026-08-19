import { useEffect, useState } from "react"
import { Text, Button, StyleSheet, View, TouchableOpacity } from "react-native"


const AppUseEffectAvanzado = () => {


    const [personas, setPersonas] = useState([]);

    const consultarApiPersonas = async () => {
        const obtenerDatosApi = await fetch("https://6a7fc151ec7a640e63ab7155.mockapi.io/Personas");
        const convertirJson = await obtenerDatosApi.json();
        console.log(JSON.stringify(convertirJson, null, 2));
        setPersonas(convertirJson)
    }

    useEffect(() => {
        consultarApiPersonas();
    }, []);

    return (
        <>
            {/* <Text>{personas.length}</Text> */}
            {personas.map((value) => (
                <Text key={value.id}>
                    {value.nombre}
                </Text>
            ))}
        </>
    )
}

export default AppUseEffectAvanzado

const estilos = StyleSheet.create({


})













