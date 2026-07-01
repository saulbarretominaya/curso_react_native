import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'

const ListaProductos = ({ listaProductos, fnEliminar }) => {


    return (
        <>

            <View style={estilos.contenedorPrincipal}>
                <Text style={estilos.titulo}>Lista de Productos</Text>
            </View>

            <FlatList
                data={listaProductos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={estilos.contenedorLista}>
                        <Text>Nombre: {item.nombre}</Text>
                        <Text>Precio: {item.precio}</Text>
                        <TouchableOpacity style={estilos.botonEliminar} onPress={() => {fnEliminar(item.id)}} >
                            <Text>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            >
            </FlatList>

        </>
    )
}

export default ListaProductos

const estilos = StyleSheet.create({
    contenedorPrincipal: {
        // paddingTop: 30,
        // paddingBottom: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    contenedorLista: {
        padding: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    botonEliminar: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    }


});

