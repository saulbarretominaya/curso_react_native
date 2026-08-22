import { useEffect, useState } from "react"
import { Text, Button, StyleSheet, View, TouchableOpacity } from "react-native"
import { Avatar, Card } from "react-native-paper";



{/* Recibo el objeto */ }
const DetalleEmpleados = (objeto) => {

    console.log(objeto);
    console.log(JSON.stringify(objeto.empleado, null, 2));



    return (
        <>
            {objeto.empleado && (
                <Card style={estilos.detalle}>
                    <Card.Title
                        title={objeto.empleado.nombre}
                        subtitle={objeto.empleado.cargo}
                        left={() => (
                            <Avatar.Image
                                size={50}
                                source={{ uri: objeto.empleado.imagen }}
                            />
                        )}
                        titleStyle={estilos.titulo}
                        subtitleStyle={estilos.subtitulo}
                    />

                    <Card.Content>
                        <Text style={estilos.texto}>Correo: {objeto.empleado.correo}</Text>
                        <Text style={estilos.texto}>Celular: {objeto.empleado.celular}</Text>
                        <Text style={estilos.texto}>País: {objeto.empleado.pais}</Text>
                        <Text style={estilos.texto}>Dirección: {objeto.empleado.direccion}</Text>
                    </Card.Content>
                </Card>
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
        fonteight:"bold",
        // fontSize:10
    },
    subtitulo: {
        // marginLeft: 5,
    },
})













