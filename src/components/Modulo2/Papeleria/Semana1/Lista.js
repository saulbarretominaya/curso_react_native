import { Text, FlatList } from 'react-native';
import Item from './Item';
const Lista = ({ arrayProductos, fnEliminarProducto }) => {


  return (
    <>
      <FlatList
        data={arrayProductos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Item
              productos={item}
              fnEliminarProducto={fnEliminarProducto}
            >
            </Item>
          )
        }
        }
      ></FlatList>
    </>
  );
}

export default Lista;




// Todos estos metodos requieren una function como parametro, ya sea una function declarada o una arrow function
// map()
// filter()
// find()
// forEach()


// En el caso de FlatList, renderItem viene a ser com el map() de un array,
// ya que recibe una function que se ejecuta por cada elemento del array y retorna un nuevo array con los elementos transformados.




