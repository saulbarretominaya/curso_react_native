import { useEffect, useState } from "react"
import { Text, Button, StyleSheet, View, TouchableOpacity } from "react-native"
import { Avatar, Card } from "react-native-paper";


{/* Recibo el objeto */ }
const DetalleEmpleados = (objeto) => {

    // Recuperamos la funcion eliminar
    const onEliminar = objeto.onEliminar;

    return (
        <>
            {objeto.empleados && (
                <>
                    <Card style={estilos.detalle}>
                        <Card.Title
                            title={objeto.empleados.nombre}
                            subtitle={objeto.empleados.cargo}
                            left={() => (
                                <Avatar.Image
                                    size={50}
                                    source={{ uri: objeto.empleados.imagen }}
                                />
                            )}
                            titleStyle={estilos.titulo}
                            subtitleStyle={estilos.subtitulo}
                        />

                        <Card.Content>
                            <Text style={estilos.texto}>Correo: {objeto.empleados.correo}</Text>
                            <Text style={estilos.texto}>Celular: {objeto.empleados.celular}</Text>
                            <Text style={estilos.texto}>País: {objeto.empleados.pais}</Text>
                            <Text style={estilos.texto}>Dirección: {objeto.empleados.direccion}</Text>
                        </Card.Content>
                    </Card>
                    <Button
                        title="Eliminar empleado"
                        onPress={() => onEliminar(objeto.empleados)}
                        // onPress={() => console.log(objeto.empleados)}
                    />
                </>
            )}
        </>
    )
}

export default DetalleEmpleados

const estilos = StyleSheet.create({
    // detalle: {
    //     marginTop: 10,
    // },
    texto: {
        marginBottom: 5,
        // fontWeight:"bold"
    },
    titulo: {
        // marginLeft: 10,
        fonteight: "bold",
        // fontSize:10
    },
    subtitulo: {
        // marginLeft: 5,
    },
})













