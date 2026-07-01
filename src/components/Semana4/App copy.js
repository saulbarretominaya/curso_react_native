import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState, useMemo } from 'react'
// import Resultado from './src/components/Resultado'
import ListaResultado from './src/components/ListaResultado';
import FormularioRegistro from './src/components/FormularioRegistro';

const registrosIniciales = [
  {
    id: 'r1',
    nombre: 'Cafetera X100',
    descripcion: 'Cafetera espresso 1.2L',
    precio: 249.9,
    cantidad: 2,
    categoria: 'Electrodomésticos',
    imagen: 'https://picsum.photos/seed/cafe/200/200',
  },
  {
    id: 'r2',
    nombre: 'Botella Reutilizable',
    descripcion: '500ml acero inoxidable',
    precio: 45.0,
    cantidad: 10,
    categoria: 'Hogar',
    imagen: 'https://picsum.photos/seed/bottle/200/200',
  },
];

const App = () => {

  const [registros, setRegistros] = useState(registrosIniciales);

  const agregarRegistro = (registro) => {
    const id = String(Date.now());
    setRegistros(prev => [{ ...registro, id }, ...prev]);
  };

  const eliminarRegistro = (id) => {
    setRegistros(prev => prev.filter(item => item.id !== id));

  };

  const { totalItems, valorInventario } = useMemo(() => {
    const totalItems = registros.reduce((acc, r) => acc + (r.cantidad || 0), 0);
    const valorInventario = registros.reduce((acc, r) => acc + (r.precio * (r.cantidad || 0)), 0);
    return { totalItems, valorInventario };
  }, [registros]);


  return (
    <>
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.header}>
          <Text style={styles.titulo}>Registro Visual</Text>
          <Text style={styles.subtitulo}>Registro con imagen</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.resumen}>
            <Text style={styles.resumenText}>Total items: {totalItems}</Text>
            <Text style={styles.resumenText}>Valor inventario: S/. {valorInventario.toFixed(2)}</Text>
          </View>

          {/* OJO: prop 'datos' y 'alEliminar' como en tu material */}
          

          {/* Formulario debajo o arriba según prefieras */}
          <FormularioRegistro alGuardar={agregarRegistro} />
          <ListaResultado datos={registros} alEliminar={eliminarRegistro} />
        </View>
      </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f6f8fb' },

  header: {
    padding: 16,
    backgroundColor: '#0ea5a6',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  titulo: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  subtitulo: { color: 'white', marginTop: 4 },

  container: { flex: 1, padding: 16 },

  resumen: {
    marginVertical: 12,
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,               // sombra en Android
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  resumenText: { fontWeight: '600' },
});