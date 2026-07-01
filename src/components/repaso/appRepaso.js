import AppSemanaDos from './src/components/Semana2/AppSemanaDos'
import AppSemanaTres from './src/components/Semana3/AppSemanaTres'
import AppSemanaCuatro from './src/components/Semana4/AppSemanaCuatro'
import AppSemanaCinco from './src/components/Semana5/AppSemanaCinco'
// import AppApiEmpleados from './src/components/Semana5/AppApiEmpleados'
import mockProductos from './src/components/repaso/mocks/mockProductos'
import ListaProductos from './src/components/repaso/ListaProductos'
import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const AppRepaso = () => {

  // console.log(JSON.stringify(mockProductos,null, 2))

  const [productos, setProductos] = React.useState(mockProductos)

  const fnRegistrar = () => {
    const nuevoObjeto =
    {
      "id": 4,
      "nombre": "Mantequilla",
      "precio": 20.00,
      "descripcion": "Descripción del producto 4"
    }
    setProductos([...productos, nuevoObjeto])
  }

  const fnEliminar = (id) => {
    const nuevoArreglo = productos.filter((obj) => {
      return obj.id != id;
    });
    setProductos(nuevoArreglo);

    // Filter siempre va devolver un nuevo arreglo
    // Filter siempre va retornas valores true
    // Si tengo estos 3 elementos [1,2,3] y deseo eliminar el 2.
    // 1 == 2 => false
    // 2 == 2 => true
    // 3 != 2 => true
    // Resultado final [1,3]

  }

  return (
    <>
      {/* <AppSemanaDos /> */}
      <AppSemanaTres />
      {/* <AppSemanaCuatro /> */}
      {/* <AppSemanaCinco /> */}
      {/* <AppApiEmpleados /> */}
      {/* <View style={estilos.contenedorPrincipal}>
        <ListaProductos
          listaProductos={productos}
          fnEliminar={fnEliminar}
        />
        <TouchableOpacity style={estilos.boton} onPress={fnRegistrar}>
          <Text style={estilos.textoBoton}>Registrar</Text>
        </TouchableOpacity>
      </View> */}
    </>
  )
}

export default AppRepaso

const estilos = {
  contenedorPrincipal: {
    padding: 40
  },

  boton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  }
}



