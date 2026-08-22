import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const FormularioEmpleado = (objeto) => {

    // Recibo la funcion como prop y lo almaceno en una variable para poder usarla dentro del componente.
    const onGuardar = objeto.onGuardar;

    const [nombre, setNombre] = useState("");
    const [cargo, setCargo] = useState("");


    const guardar = () => {
       
        const empleado = {
            nombre: nombre,
            cargo: cargo
        };
        onGuardar(empleado);
        setNombre("");
        setCargo("");
    }

    return (
        <View style={estilos.contenedor}>
            <TextInput
                style={estilos.campo}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            ></TextInput>

            <TextInput
                style={estilos.campo}
                placeholder="Cargo"
                value={cargo}
                onChangeText={setCargo}
            ></TextInput>

            <Button
                title="Crear empleado"
                onPress={guardar}
            />

        </View>
    )
}

export default FormularioEmpleado;

const estilos = StyleSheet.create({
    contenedor: {
        paddingTop: 50,
        paddingHorizontal: 10,
    },

    campo: {
        marginBottom: 10,
    }
})