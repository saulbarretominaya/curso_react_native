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
                onPress={() => navigation.navigate("Perfil")}
            />
        </View>
    );
}

const Perfil = ({ navigation }) => {

    return (
        <View>
            <Text>Esta es la pantalla de perfil</Text>
            <Button
                title="Regresar a la Pantalla Anterior"
                // navigation.goBack() Regresa a la pantalla anterior.
                onPress={() => navigation.goBack()}
            />

            <Button
                title="Ver Detalle"
                // navigation.navigate("Detalle") Navega hacia la pantalla Detalle.
                onPress={() => navigation.navigate("Detalle")}
            />
        </View>
    );
}

const Detalle = ({ navigation }) => {

    return (
        <View>
            <Text>Esta es la pantalla de Detalle</Text>
            <Button
                title="Regresar al Inicio"
                // elimina las pantallas del stack excepto la primera y vuelve a ella.
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}


const AppUsoNavigation = () => {

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

                {/* Tercera pantalla */}
                <Stack.Screen
                    name="Detalle"
                    component={Detalle}
                    options={{
                        title: "Mi Detalle"
                    }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default AppUsoNavigation


/*
    PRINCIPALES ACCIONES DE navigation

    navigation.navigate("Pantalla")
    → Navega hacia una pantalla.

    navigation.goBack()
    → Regresa a la pantalla anterior.

    navigation.popToTop()
    → elimina las pantallas del stack excepto la primera y vuelve a ella.
*/