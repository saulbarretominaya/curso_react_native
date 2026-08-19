import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

const ItemResultado = ({ registro, alEliminar }) => {
    const subtotal = (registro.prrecio * (registro.cantidad || 0)).toFixed(2);

    const confirmarEliminar = () => {
        Alert.alert('Eliminar registro', '¿Desea eliminar este registro?', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Eliminar', style: 'destructive', onPress: () => alEliminar(registro.id) },
        ]);
    };

    return (
        <View style={styles.row}>
            <Image
                source={{ uri: registro.imagen || 'https://via.placeholder.com/100' }}
                style={styles.imagen}
            />

            <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.nombre}>{registro.nombre}</Text>
                {!!registro.descripcion && <Text style={styles.descripcion}>{registro.descripcion}</Text>}

                <View style={styles.metaRow}>
                    <Text style={styles.meta}>Cat: {registro.categoria}</Text>
                    <Text style={styles.meta}>Cant: {registro.cantidad}</Text>
                </View>

                <Text style={styles.precio}>
                    S/. {registro.precio} • Subtotal S/. {subtotal}
                </Text>
            </View>

            <TouchableOpacity style={styles.btnEliminar} onPress={confirmarEliminar}>
                <Text style={styles.txtEliminar}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ItemResultado;

const styles = StyleSheet.create({
    row: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.04,
        elevation: 2,
    },
    imagen: { width: 80, height: 80, borderRadius: 10, backgroundColor: '#f3f4f6' },
    nombre: { fontWeight: '700', fontSize: 16 },
    descripcion: { color: '#6b7280', marginTop: 2 },
    metaRow: { flexDirection: 'row', gap: 12, marginTop: 6 },
    meta: { fontSize: 12, color: '#374151' },
    precio: { marginTop: 6, fontWeight: '600' },
    btnEliminar: {
        backgroundColor: '#ef4444',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginLeft: 8,
    },
    txtEliminar: { color: 'white', fontWeight: '700' },
});