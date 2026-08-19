import { useEffect, useState } from "react"
import { Text, Button, StyleSheet, View, TouchableOpacity } from "react-native"
import AppPropsHijo from "./AppPropsHijo"

const AppProps = () => {

    const tipoTexto = "Pasando un campo Texto";
    const tipoBooleano = true;
    const tipoArray = [1, 2, 3];
    const tipoObjeto = { id: "1", nombre: "Saul" }
    const tipoArrayObjetos = [{ id: "1", nombre: "Saul Barreto" }, { id: "2", nombre: "Victoria Minaya" }]

    //Ahora trabajamos con functiones
    const [mensaje, setMensaje] = useState("");

    const recibirMensaje = (texto) => {
        setMensaje(texto)
    }

    return (
        <>
            <Text style={{ padding:40 }}>{"Mensaje: " + mensaje}</Text>
            {/* Aqui lo que decimos es lo siguiente, Hijo te estoy entregando 6 valores, el argumento_6 es una funcion. */}
            <AppPropsHijo
                argumento_1={tipoTexto}
                argumento_2={tipoBooleano}
                argumento_3={tipoArray}
                argumento_4={tipoObjeto}
                argumento_5={tipoArrayObjetos}
                argumento_6={recibirMensaje}
            ></AppPropsHijo>
        </>
    )
}

export default AppProps

// Los props llegan al componente como un objeto, y cada propiedad de ese objeto puede contener un string, boolean, número, arreglo, objeto, función, etc.