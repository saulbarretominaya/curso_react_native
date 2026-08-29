import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Inicio = () => {

    return (
        <View>
            <Text>Esta es la pantalla de Inicio</Text>
        </View>
    );
}

const Perfil = () => {

    return (
        <View>
            <Text>Esta es la pantalla de Perfil</Text>
        </View>
    );
}

const AppUsoTabs = () => {

    return (
        <NavigationContainer>

            <Tab.Navigator>


                <Tab.Screen
                    name="Inicio"
                    component={Inicio}
                    options={{
                        title: "Página Principal",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="home"
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        title: "Mi Perfil",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="person"
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />

            </Tab.Navigator>

        </NavigationContainer>
    );
}

export default AppUsoTabs;