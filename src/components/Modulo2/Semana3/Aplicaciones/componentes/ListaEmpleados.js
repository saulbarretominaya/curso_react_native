import { useEffect, useState } from "react"
import { Text, Button, StyleSheet, View, TouchableOpacity } from "react-native"
import { Avatar, Card } from "react-native-paper";



{/* Recibo el objeto */ }
const ListaEmpleados = (objeto) => {

    const empleados = objeto.empleados;
    const seleccionarEmpleado = objeto.onSelect;

    return (
        <>
            {/* value representa cada elemento del arreglo, tener en cuenta por el seleccionarEmpleado */}
            {empleados.map((value) => (
                <Card key={value.id} onPress={() => {
                    // console.log("Empleado seleccionado:");
                    // console.log(JSON.stringify(value, null, 2));
                    seleccionarEmpleado(value)
                }
                } style={estilos.card}>
                    <Card.Title
                        title={value.nombre}
                        subtitle={value.cargo}
                        left={() => (
                            <Avatar.Image
                                size={50}
                                source={{ uri: value.imagen }}
                            ></Avatar.Image>
                        )}
                    ></Card.Title>
                </Card>
            ))}
        </>
    )
}

export default ListaEmpleados

const estilos = StyleSheet.create({
    card: {
        marginBottom: 10
    }

})

