import Lista from './Lista';
import { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';


const mockProductos = [
  {
    id: "1",
    nombre: "Producto 1",
    precio: 1000,
    categoria: "Categoria 1",
  },
  {
    id: "2",
    nombre: "Producto 2",
    precio: 2000,
    categoria: "Categoria 3r",
  },
]


const AppSemanaCuatro = () => {

  const [productos, setProductos] = useState(mockProductos);


  const fnAgregarProducto = () => {
    const objNuevoProducto = {
      id: "3",
      nombre: "Producto 3",
      precio: 3000,
      categoria: "Categoria 3",
    }
    setProductos([...productos, objNuevoProducto]);
  }

  const fnEliminarProducto = (id) => {
    console.log("Eliminado la fila con id: ", id);

    const nuevoProductos = productos.filter((value) => {
      return (value.id !== id);
      // Filter siempre devuelve valores que sea true.
      //Se va eliminar el valor 2
      // 1 != 2 => true
      // 2 != 2 => false
      // 3 != 2 => true
      // Por lo tanto, el nuevo array quedaria con los valores 1 y 3, eliminando el valor 2
    })
    setProductos(nuevoProductos);
  }

  return (
    <>
      <View style={estilos.contenedor}>
        <View>
          <Lista
            arrayProductos={productos}
            fnEliminarProducto={fnEliminarProducto}
          >
          </Lista>
        </View>
        <View style={estilos.botonContainer}>
          <TouchableOpacity style={estilos.botonAgregar} onPress={fnAgregarProducto}>
            <Text style={estilos.botonTexto}>Agregar Producto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default AppSemanaCuatro;

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 50,
  },

  botonContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },

  botonAgregar: {
    backgroundColor: 'green',
    borderRadius: 3,
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },

  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
});










