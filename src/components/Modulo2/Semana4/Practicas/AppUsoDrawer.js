import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button} from 'react-native';

const Drawer = createDrawerNavigator();

const Inicio = () => {

    return (
        <View>
            <Text>Esta es la pantalla de Inicio</Text>
        </View>
    );
}

const Perfil = ({navigation}) => {

    return (
        <View>
            <Text>Esta es la pantalla de Perfil</Text>
            <Button
                title="Ir a Inicio"
                onPress={() => navigation.navigate("Inicio")}
            />
        </View>
    );
}

const AppUsoDrawer = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Inicio"
                    component={Inicio}
                />

                <Drawer.Screen
                    name="Perfil"
                    component={Perfil}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppUsoDrawer


