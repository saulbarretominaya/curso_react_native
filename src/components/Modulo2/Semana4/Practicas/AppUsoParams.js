import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';


const Stack = createNativeStackNavigator();

const Inicio = ({ navigation }) => {
    return (
        <View>
            <Text>Bienvenido a mi aplicación</Text>

            <Button
                title="Ir al perfil"
                // "Navega hacia la ruta que está registrada con el name Perfil."
                onPress={() => navigation.navigate("Perfil", {
                    nombre: "Saul",
                    cargo: "Docente"

                })}
            />
        </View>
    );
}

const Perfil = ({ navigation, route }) => {

    const nombre = route.params.nombre;
    const cargo = route.params.cargo;

    return (
        <View>
            <Text>Nombre: {nombre}</Text>
            <Text>Cargo: {cargo}</Text>

            <Button
                title="Regresar a la Pantalla Anterior"
                // navigation.goBack() Regresa a la pantalla anterior.
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}


const AppUsoParams = () => {

    return (
        // Es el contenedor que administra nuestro sistema de navegación.
        <NavigationContainer>
            {/* "Nuestra aplicación va a utilizar este navegador de tipo Stack." */}
            <Stack.Navigator>

                {/* Aqui registro dos pantallas dentro de este navegador. La primera pantalla registrada es la pantalla inicial por defecto. */}
                {/* La primera pantalla es la principal por defecto. */}
                <Stack.Screen
                    name="Inicio"
                    component={Inicio}
                />
                {/* Segunda pantalla */}
                <Stack.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        title: "Mi perfil"
                    }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default AppUsoParams


/*
    PRINCIPALES ACCIONES DE navigation

    navigation.navigate("Pantalla")
    → Navega hacia una pantalla.

    navigation.goBack()
    → Regresa a la pantalla anterior.

    navigation.popToTop()
    → elimina las pantallas del stack excepto la primera y vuelve a ella.
*/