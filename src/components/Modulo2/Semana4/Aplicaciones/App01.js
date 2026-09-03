import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "./peliculas/screens/Inicio";
import Detalle from "./peliculas/screens/Detalle";

const Stack = createNativeStackNavigator();

const App01 = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Inicio"
                    component={Inicio}
                />
                <Stack.Screen
                    name="Detalle"
                    component={Detalle}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App01;