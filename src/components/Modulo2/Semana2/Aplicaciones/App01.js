import { useEffect, useState } from "react"
import { Text, Button, StyleSheet, View, TouchableOpacity, ActivityIndicator, ScrollView} from "react-native"
import ListaEmpleados from "./componentes/ListaEmpleados";
import DetalleEmpleado from "./componentes/DetalleEmpleados";

const App01 = () => {

    const [personas, setPersonas] = useState([]);
    const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
    const [cargando, setCargando] = useState(true);
    // console.log(empleadoSeleccionado);
    // console.log(JSON.stringify(empleadoSeleccionado, null, 2));


    const consultarApiPersonas = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const obtenerDatosApi = await fetch("https://6a7fc151ec7a640e63ab7155.mockapi.io/Personas");
        const convertirJson = await obtenerDatosApi.json();
        // console.log(JSON.stringify(convertirJson, null, 2));
        setPersonas(convertirJson)
        //Apagamos el loader
        setCargando(false);
    }

    useEffect(() => {
        consultarApiPersonas();
    }, []);

    return (
        <>
            {cargando ? (
                <View style={estilos.loader}>
                    <ActivityIndicator size="large" />
                    <Text>Cargando...</Text>
                </View>
            ) : (
                <View style={estilos.contenedor}>
                    <ScrollView>
                        <ListaEmpleados
                            // Paso el arreglo de objeto y la funcion como props
                            personas={personas}
                            onSelect={setEmpleadoSeleccionado}
                        ></ListaEmpleados>
                        <DetalleEmpleado
                            empleado={empleadoSeleccionado}
                        >
                        </DetalleEmpleado>
                    </ScrollView>
                </View>
            )}
        </>
    )
}

export default App01

const estilos = StyleSheet.create({

    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    contenedor: {
        paddingTop: 30,
        paddingHorizontal: 10,
    }
})



















