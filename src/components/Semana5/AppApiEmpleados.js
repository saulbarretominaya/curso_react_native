import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useState, useEffect } from "react";

import ListaEmpleados from "./ListaEmpleados";
import DetalleEmpleado from "./DetalleEmpleado";

const AppApiEmpleados = () => {

  const [empleados, setEmpleados] = useState([]);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  useEffect(() => {

    const obtenerEmpleados = async () => {

      try {

        const response = await fetch(
          "https://6a39e19e917c7b14c74c6534.mockapi.io/empleados"
        );

        const data = await response.json();

        setEmpleados(data);

      } catch (error) {

        console.log(error);

      }

    };

    obtenerEmpleados();

  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <Text variant="headlineMedium" style={styles.titulo}>
        Directorio de Empleados
      </Text>

      <Text style={styles.subtitulo}>
        Total empleados: {empleados.length}
      </Text>

      <DetalleEmpleado
        empleado={empleadoSeleccionado}
      />

      <ScrollView>

        <ListaEmpleados
          empleados={empleados}
          onSeleccionar={setEmpleadoSeleccionado}
        />

      </ScrollView>

    </SafeAreaView>
  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },

  titulo: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
  },

  subtitulo: {
    textAlign: "center",
    marginBottom: 10,
  },

});

export default AppApiEmpleados;