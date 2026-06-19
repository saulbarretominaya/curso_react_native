import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const AppHijo = ({ nombre, apePaterno, apeMaterno, direccion, edad, estado }) => {

    const [formData, setFormData] = useState({
        nombre: nombre || '',
        apePaterno: apePaterno || '',
        apeMaterno: apeMaterno || '',
        direccion: direccion || '',
        edad: edad || '',
        estado: estado || '',
        sexo: '',
        raza: '',
        pais: ''
    });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleGuardar = () => {
        console.log('Datos guardados:', formData);
        alert('Datos guardados correctamente');
    };

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.titulo}>Formulario de Datos</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChangeText={(text) => handleInputChange('nombre', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Apellido Paterno"
                    value={formData.apePaterno}
                    onChangeText={(text) => handleInputChange('apePaterno', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Apellido Materno"
                    value={formData.apeMaterno}
                    onChangeText={(text) => handleInputChange('apeMaterno', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Dirección"
                    value={formData.direccion}
                    onChangeText={(text) => handleInputChange('direccion', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Edad"
                    value={formData.edad}
                    keyboardType="numeric"
                    onChangeText={(text) => handleInputChange('edad', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Estado"
                    value={formData.estado}
                    onChangeText={(text) => handleInputChange('estado', text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleGuardar}>
                    <Text style={styles.buttonText}>Guardar</Text>
                </TouchableOpacity>

                <View style={styles.datosContainer}>
                    <Text style={styles.label}>Datos Actuales:</Text>
                    <Text>Nombre: {formData.nombre}</Text>
                    <Text>Apellido Paterno: {formData.apePaterno}</Text>
                    <Text>Apellido Materno: {formData.apeMaterno}</Text>
                    <Text>Dirección: {formData.direccion.distrito}</Text>
                    <Text>Provincia: {formData.direccion.provincia}</Text>
                    <Text>Edad: {formData.edad}</Text>
                    <Text>Estado: {formData.estado}</Text>
                </View>
            </ScrollView>
        </>
    )
}

export default AppHijo

const styles = StyleSheet.create({

    container: {
        padding: 50,
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },

    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
        textAlign: "center",
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: "#fff",
        width: "100%",
        fontSize: 14,
    },

    datosContainer: {
        marginTop: 30,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
        width: "100%",
    },

    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },

})



/* Alumnos


*/
