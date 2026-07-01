// components/ListaResultado.js
import React from 'react';
import { FlatList, View, Text } from 'react-native';
import ItemResultado from './ItemResultado';

const ListaResultado = ({ datos, alEliminar }) => {
    return (
        <FlatList
            data={datos}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
            renderItem={({ item }) => (
                <ItemResultado registro={item} alEliminar={alEliminar} />
            )}
            ListEmptyComponent={
                <View style={{ padding: 20 }}>
                    <Text style={{ color: '#666' }}>Aún no hay registros.</Text>
                </View>
            }
        />
    );
}

export default ListaResultado;