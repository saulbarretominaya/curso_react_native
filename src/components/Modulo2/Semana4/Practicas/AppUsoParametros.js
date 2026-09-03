import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';


const Stack = createNativeStackNavigator();

const productos = [
    {
        id: 1,
        nombre: "Laptop",
        precio: 2500
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 80
    },
    {
        id: 3,
        nombre: "Teclado",
        precio: 150
    }
];

const Inicio = ({ navigation }) => {
    return (
        <View>
            <Text>Esta es la pantalla de Inicio</Text>

            <Button
                title="Ver Productos"
                onPress={() => navigation.navigate("Productos")}
            />
        </View>
    );
}


const Productos = ({ navigation }) => {
    return (
        <View>
            <Text>Lista de Productos</Text>

            {productos.map((producto) => (
                <Button
                    key={producto.id}
                    title={producto.nombre}
                    onPress={() => navigation.navigate("Detalle", {
                        id: producto.id
                    })}
                />
            ))}
        </View>
    );
}


const Detalle = ({ route }) => {

    const { id } = route.params;
    const producto = productos.find((producto) => producto.id === id);

    if (!producto) {
        return (
            <View>
                <Text>Producto no encontrado</Text>
            </View>
        );
    }

    return (
        <View>
            <Text>Detalle del Producto</Text>
            <Text>Nombre: {producto.nombre}</Text>
            <Text>Precio: S/ {producto.precio}</Text>
        </View>
    );
}

const AppUsoParametros = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Inicio"
                    component={Inicio}
                />
                <Stack.Screen
                    name="Productos"
                    component={Productos}
                />
                <Stack.Screen
                    name="Detalle"
                    component={Detalle}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppUsoParametros

