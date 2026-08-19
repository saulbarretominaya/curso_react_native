import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const ListaEmpleados = ({ empleados, onSeleccionar }) => {

  return (
    <>
      {
        empleados.map((emp) => (

          <TouchableOpacity
            key={emp.id}
            onPress={() => onSeleccionar(emp)}
          >

            <View style={styles.card}>

              <Text style={styles.nombre}>
                {emp.name}
              </Text>

              <Text style={styles.cargo}>
                {emp.position}
              </Text>

            </View>

          </TouchableOpacity>

        ))
      }
    </>
  );

};

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },

  nombre: {
    fontSize: 18,
    fontWeight: "bold",
  },

  cargo: {
    color: "#666",
    marginTop: 3,
  },

});

export default ListaEmpleados;