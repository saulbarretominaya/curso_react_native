import { useState, useEffect } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const FormularioEmpleado = (objeto) => {

    // Recibo la funcion como prop y lo almaceno en una variable para poder usarla dentro del componente.
    const onGuardar = objeto.onGuardar;
    const onActualizar = objeto.onActualizar;
    const empleado = objeto.empleado;

    const [nombre, setNombre] = useState("");
    const [cargo, setCargo] = useState("");


    useEffect(() => {
        // De esta forma es que se setean los datos en lost TextInput
        if (empleado) {
            setNombre(empleado.nombre);
            setCargo(empleado.cargo);
        }
        // Ese [empleado] significa: "Ejecuta nuevamente este useEffect cuando cambie empleado."
    }, [empleado]);


    const guardar = () => {



        if (empleado) {
            // estamos editando
            const empleadoDatos = {
                id: empleado.id,
                nombre: nombre,
                cargo: cargo
            };
            // console.log(empleadoDatos)
            onActualizar(empleadoDatos);
        } else {
            // estamos creando
            const empleado = {
                nombre: nombre,
                cargo: cargo
            };
            onGuardar(empleado);
            setNombre("");
            setCargo("");
        }
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
                title={empleado ? "Actualizar Empleado" : "Registrar Empleado"}
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