import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const FormularioRegistro = ({ alGuardar }) => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagenUri, setImagenUri] = useState(null);


    // Pedir permisos para galería (Android / iOS)
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    Alert.alert('Permisos', 'Se requieren permisos para acceder a las imágenes.');
                }
            }
        })();
    }, []);



    // Seleccionar imagen desde galería
    const seleccionarImagen = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.7,
            });

            // Soporta SDKs antiguos y nuevos (canceled vs cancelled / assets vs uri)
            const fueCancelado = ('canceled' in result ? result.canceled : result.cancelled);
            if (!fueCancelado) {
                const uri = result.assets?.[0]?.uri ?? result.uri;
                setImagenUri(uri);
            }
        } catch (error) {
            Alert.alert('Error', 'No se pudo seleccionar la imagen.');
            console.error(error);
        }
    };


    // Validar y enviar datos al padre
    const handleGuardar = () => {
        if (!nombre.trim() || !precio || !cantidad) {
            Alert.alert('Campos incompletos', 'Nombre, precio y cantidad son obligatorios.');
            return;
        }

        const precioNum = parseFloat(precio);
        const cantidadNum = parseInt(cantidad, 10);
        if (isNaN(precioNum) || isNaN(cantidadNum) || precioNum < 0 || cantidadNum < 0) {
            Alert.alert('Datos inválidos', 'Asegúrese que precio y cantidad sean números válidos (>= 0).');
            return;
        }

        // Construcción del objeto JSON normalizado
        const nuevoRegistro = {
            nombre: nombre.trim(),
            descripcion: descripcion.trim(),
            precio: precioNum,
            cantidad: cantidadNum,
            categoria: categoria.trim() || 'Sin categoría',
            imagen: imagenUri, // puede ser null
        };

        alGuardar(nuevoRegistro);

        //Limpieza del formulario
        setNombre('');
        setDescripcion('');
        setPrecio('');
        setCantidad('');
        setCategoria('');
        setImagenUri(null);
    };


    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Nuevo registro</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Descripción (opcional)"
                value={descripcion}
                onChangeText={setDescripcion}
            />

            {/* Fila: Precio y Cantidad */}
            <View style={styles.rowInputs}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Precio (S/.)"
                    value={precio}
                    onChangeText={setPrecio}
                    keyboardType="numeric"
                />
                <TextInput
                    style={[styles.input, { width: '48%', marginLeft: 8 }]}
                    placeholder="Cant."
                    value={cantidad}
                    onChangeText={setCantidad}
                    keyboardType="numeric"
                />
            </View>

            <TextInput
                style={styles.input}
                placeholder="Categoría"
                value={categoria}
                onChangeText={setCategoria}
            />

            {/* Fila imagen: botón + preview/placeholder */}
            <View style={styles.rowImage}>
                <TouchableOpacity style={styles.btnImagen} onPress={seleccionarImagen}>
                    <Text style={styles.btnImagenText}>
                        {imagenUri ? 'Cambiar imagen' : 'Cargar imagen'}
                    </Text>
                </TouchableOpacity>

                {imagenUri ? (
                    <Image source={{ uri: imagenUri }} style={styles.preview} />
                ) : (
                    <View style={styles.previewPlaceholder}>
                        <Text style={{ color: '#777' }}>No hay imagen</Text>
                    </View>
                )}
            </View>

            {/* Fila acciones: Limpiar / Guardar */}
            <View style={styles.rowAcciones}>
                <TouchableOpacity
                    style={styles.btnCancelar}
                    onPress={() => {
                        setNombre('');
                        setDescripcion('');
                        setPrecio('');
                        setCantidad('');
                        setCategoria('');
                        setImagenUri(null);
                    }}
                >
                    <Text style={styles.btnCancelarText}>Limpiar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnGuardar} onPress={handleGuardar}>
                    <Text style={styles.btnGuardarText}>Guardar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default FormularioRegistro;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 3,
        marginBottom: 12,
    },
    cardTitle: { fontWeight: '700', marginBottom: 8 },

    input: {
        borderWidth: 1,
        borderColor: '#3ee7ee',
        padding: 10,
        borderRadius: 8,
        marginBottom: 8,
        backgroundColor: '#fafafa',
    },

    rowInputs: { flexDirection: 'row' },

    rowImage: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },

    btnImagen: {
        backgroundColor: '#006d64',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    btnImagenText: { color: 'white', fontWeight: '600' },

    preview: { width: 70, height: 70, borderRadius: 8, marginLeft: 12 },

    previewPlaceholder: {
        width: 70,
        height: 70,
        borderRadius: 8,
        marginLeft: 12,
        borderWidth: 1,
        borderColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },

    rowAcciones: { flexDirection: 'row', justifyContent: 'flex-start', gap: 8, marginTop: 10 },

    btnGuardar: {
        backgroundColor: '#0ea5a6',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 8,
    },
    btnGuardarText: { color: 'white', fontWeight: '700' },

    btnCancelar: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
        marginRight: 8,
    },
    btnCancelarText: { color: '#374151' },
});