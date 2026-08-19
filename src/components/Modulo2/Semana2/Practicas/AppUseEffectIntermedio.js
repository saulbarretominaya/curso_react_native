import { useEffect, useState } from "react"
import { Text, Button, StyleSheet, View, TouchableOpacity } from "react-native"


const AppUseEffectIntermedio = () => {

    // Otro ejemplo de array de dependencias, se agrega dos, pero con uno es mas que suficiente.
    const [contador, setContador] = useState(1);
    const [nombre, setNombre] = useState("Saul");

    useEffect(() => {
        console.log("Se empieza ejecutar...");
    }, [contador, nombre])

    return (
        <>
            <View>
                <View style={estilos.bloqueContador}>
                    <Text>{contador}</Text>
                    <Text>{nombre}</Text>
                </View>

                {/* Cada vez que des clic, se renderizada */}
                <TouchableOpacity
                    style={estilos.botonSumar}
                    onPress={() => { setContador(contador + 1) }}
                >
                    <Text>Sumar</Text>
                </TouchableOpacity>

                {/* Importate, ¿El valor de esa dependencia cambió respecto al render anterior?
                Si es asi, volvera a renderizar. */}
                <TouchableOpacity
                    style={estilos.botonCambiarNombre}
                    onPress={() => { setNombre(nombre == "Saul" ? "Juan" : "Saul") }}
                >
                    <Text>Cambiar Nombre</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default AppUseEffectIntermedio

const estilos = StyleSheet.create({

    bloqueContador: {
        height: 70,
        justifyContent: "center",
        alignItems: "center"
    },
    botonSumar: {
        borderColor: "red",
        backgroundColor: "yellow",
        height: 30,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },

    botonCambiarNombre: {
        borderColor: "red",
        backgroundColor: "green",
        height: 30,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    }
})












