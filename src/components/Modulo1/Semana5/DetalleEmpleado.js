import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";

const DetalleEmpleado = ({ empleado }) => {

  if (!empleado) {

    return (

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Seleccione un empleado
        </Text>

      </View>

    );

  }

  return (

    <View style={styles.card}>

      <Text style={styles.titulo}>
        Empleado Seleccionado
      </Text>

      <Image
        source={{ uri: empleado.avatar }}
        style={styles.avatar}
      />

      <Text style={styles.nombre}>
        {empleado.name}
      </Text>

      <Text style={styles.cargo}>
        {empleado.position}
      </Text>

      <Text style={styles.id}>
        ID: {empleado.id}
      </Text>

    </View>

  );

};

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },

  nombre: {
    fontSize: 18,
    fontWeight: "bold",
  },

  cargo: {
    color: "#666",
    marginTop: 5,
  },

  id: {
    marginTop: 5,
  },

});

export default DetalleEmpleado;