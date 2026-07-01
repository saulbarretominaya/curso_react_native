import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const Item = ({ productos, fnEliminarProducto }) => {


  return (
    <>
      <View>
        <Text>{productos.nombre}</Text>
        <Text>{productos.precio}</Text>
        <Text>{productos.categoria}</Text>
        <TouchableOpacity style={estilos.botonEliminar} onPress={() => {fnEliminarProducto(productos.id)}}>
          <Text>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Item;

const estilos = StyleSheet.create({

  botonEliminar: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  }

})



