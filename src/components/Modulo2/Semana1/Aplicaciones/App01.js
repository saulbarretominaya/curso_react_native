import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'

const arrayObjMascotas = [
    {
        categoria: "Gato",
        codigo: "001",
        nombre: "Michifu",
        descripcion: "¡Michi es muy juguetón!"
    },
    {
        categoria: "Perro",
        codigo: "002",
        nombre: "Bobby",
        descripcion: "¡Bobby come sus croquetas!"
    }
]


const App01 = () => {

    const [categoria, setCategoria] = useState("");
    const [codigo, setCodigo] = useState("");
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [resultado, setResultado] = useState(arrayObjMascotas);


    const fnRegistrar = () => {

        // Creo el nuevo objeto
        const objEntrante = {
            "categoria": categoria,
            "codigo": codigo,
            "nombre": nombre,
            "descripcion": descripcion,
        }

        // Puedo hacerlo de dos maneras, asi:
        const nuevoArreglo = [...resultado, objEntrante];
        setResultado(nuevoArreglo)
        // o asi, donde React le proporciona a esa función el estado anterior, y prev recibe ese valor.
        //setResultado((pre) => { return [...pre, objEntrante] })
        // console.log(setResultado());
    }

    const fnEliminar = (codigo) => {
        console.log(codigo);
    }

    return (
        <>

            {/* https://loremflickr.com/300/300/animal */}

            <View style={estilos.bloquePrincipal}>
                <View style={estilos.bloqueCabecera}>
                    <Text style={estilos.textTituloCabecera}>El consultorio de</Text>
                    <Text style={estilos.textTituloCabecera}>Michifu</Text>
                </View>

                <View style={estilos.bloqueFormulario}>
                    <Text style={estilos.textTituloFormulario}>Registrar Mascota</Text>
                    <TextInput
                        style={estilos.textInput}
                        placeholder='Categoría'
                        onChangeText={setCategoria}
                    ></TextInput>
                    <TextInput
                        style={estilos.textInput}
                        placeholder='Código Mascota'
                        onChangeText={setCodigo}
                    ></TextInput>
                    <TextInput
                        style={estilos.textInput}
                        placeholder='Nombre Mascota'
                        onChangeText={setNombre}

                    ></TextInput>
                    <TextInput
                        style={estilos.textInput}
                        placeholder='Descripción'
                        onChangeText={setDescripcion}
                    ></TextInput>

                    <View style={estilos.bloqueBotones}>
                        <TouchableOpacity style={estilos.botonLimpiar}>
                            <Text style={estilos.textoBoton}>Limpiar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilos.botonRegistrar} onPress={fnRegistrar}>
                            <Text style={estilos.textoBoton}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={estilos.bloqueLista}>

                    <FlatList
                        keyExtractor={(item) => item.codigo}
                        data={resultado}
                        renderItem={({ item }) => (
                            <View style={estilos.contenedorPrincipalLista}>
                                <View style={estilos.subContenedorImagen}>
                                    <Image
                                        source={{ uri: "https://loremflickr.com/300/300/animal" }}
                                        style={estilos.imgLista}
                                    ></Image>
                                </View>
                                <View style={estilos.subContenedorTexto}>
                                    <Text style={estilos.textTexto}>
                                        <Text style={estilos.textTitulo}>Categoría: </Text>{item.categoria}
                                    </Text>
                                    <Text style={estilos.textTexto}>
                                        <Text style={estilos.textTitulo}>Codigo Mascota: </Text> {item.codigo}
                                    </Text>
                                    <Text style={estilos.textTexto}>
                                        <Text style={estilos.textTitulo}>Nombre Mascota: </Text> {item.nombre}
                                    </Text>
                                    <Text style={estilos.textTexto}>
                                        <Text style={estilos.textTitulo}>Descripción: </Text> {item.descripcion}
                                    </Text>
                                </View>
                                <View style={estilos.subContenedorBotones}>
                                    <TouchableOpacity
                                        style={estilos.botonEliminar} onPress={() => {return fnEliminar(item.codigo)}}>
                                        <Text style={estilos.textBotonEliminar}>Eliminar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />

                </View>
            </View>
        </>
    )
}

export default App01

const estilos = StyleSheet.create({

    bloquePrincipal: {
        flex: 1,
        // backgroundColor: "yellow",
    },

    bloqueCabecera: {
        height: 90,
        // flex: 1, // no aplica el flex en este caso porque ya tiene un height definido
        backgroundColor: "#017072",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,

    },

    textTituloCabecera: {
        fontSize: 20,
        fontWeight: "500",
        color: "white",
    },

    bloqueFormulario: {
        height: 295,
        // flex: 2,
        // backgroundColor: "green",
        marginHorizontal: 20,
        marginTop: 5,

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

    },

    // Estilos del Text Titulo del Formulario
    textTituloFormulario: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 10
    },


    // Estilos del TextInput
    textInput: {
        borderWidth: 1,
        marginHorizontal: 10,
        marginTop: 10,
        borderColor: "#cccccc",
        borderRadius: 5,
    },


    // Bloque de Botones
    botonRegistrar: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        backgroundColor: "#017072",
        flex: 1,
        borderRadius: 5,
    },

    botonLimpiar: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        backgroundColor: "#9933ff",
        flex: 1,
        borderRadius: 5,
    },
    bloqueBotones: {
        flexDirection: "row",
        marginHorizontal: 10,
        gap: 10,
    },

    textoBoton: {
        color: "white",
        paddingVertical: 5,
    }

})
//