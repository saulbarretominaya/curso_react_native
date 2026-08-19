import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const DisignLista = () => {

    return (
        <>

            {/* https://loremflickr.com/300/300/animal */}

            <View style={estilos.bloquePrincipal}>
                <View style={estilos.bloqueCabecera}>
                    <Text>Registro Mascotas</Text>
                </View>

                <View style={estilos.bloqueFormulario}>
                </View>

                <View style={estilos.bloqueLista}>
                    <View style={estilos.contenedorPrincipalLista}>
                        <View style={estilos.subContenedorImagen}>
                            <Image
                                source={{ uri: "https://loremflickr.com/300/300/animal" }}
                                style={estilos.imgLista}
                            ></Image>
                        </View>
                        <View style={estilos.subContenedorTexto}>
                            <Text style={estilos.textTexto}>
                                <Text style={estilos.textTitulo}>Categoria: </Text>{"Perro"}
                            </Text>
                            <Text style={estilos.textTexto}>
                                <Text style={estilos.textTitulo}>Codigo Mascota: </Text> {"001"}
                            </Text>
                            <Text style={estilos.textTexto}>
                                <Text style={estilos.textTitulo}>Nombre Mascota: </Text> {"Bobby "}
                            </Text>
                            <Text style={estilos.textTexto}>
                                <Text style={estilos.textTitulo}>Descripción: </Text> {"¡Bobby come sus croquetas! "}
                            </Text>
                        </View>
                        <View style={estilos.subContenedorBotones}>
                            <TouchableOpacity
                                style={estilos.botonEliminar}>
                                <Text style={estilos.textBotonEliminar}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default DisignLista

const estilos = StyleSheet.create({

    bloquePrincipal: {
        flex: 1,
        backgroundColor: "yellow",
    },

    bloqueCabecera: {
        height: 50,
        // flex: 1, // no aplica el flex en este caso porque ya tiene un height definido
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },

    bloqueFormulario: {
        // height: 50,
        flex: 1,
        backgroundColor: "green",
        marginHorizontal: 20,
        marginTop: 20,

    },

    bloqueLista: {
        // height: 50,
        flex: 1,
        backgroundColor: "red",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },

    //#Contenedor Principal de la Lista
    contenedorPrincipalLista: {
        // marginVertical: 5,
        marginTop: 5,
        // marginHorizontal: 20,
        // padding: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        gap: 1,
        borderColor: "red",
        borderRadius: 10,
    },

    // //SubContenedores de la Listas
    subContenedorImagen: {
        borderWidth: 2,
        padding: 3,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },

    subContenedorTexto: {
        borderWidth: 2,
        padding: 3,
        flex: 2,
        justifyContent: "center",
    },

    subContenedorBotones: {
        borderWidth: 2,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "yellow"
    },

    // //Elementos de los SubContenedores
    imgLista: {
        width: 70,
        height: 70,
        borderRadius: 5
    },

    textTexto: {
        fontSize: 10,
    },

    textTitulo: {
        fontWeight: 'bold'
    },

    botonEliminar: {
        backgroundColor: "red",
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 2,
    },

    textBotonEliminar: {
        fontSize: 10,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"

    }


})





//