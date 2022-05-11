import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../pages/login';
import Cad_usuario from '../pages/Cad_usuario';
import { StackActions } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = 'Login'
                component = {Login}
                options = {{headerShown: false}}
            />
            <Stack.Screen
                name = 'Cad_usuario'
                component = {Cad_usuario}
                options = {{headerShown: false}}
            />
        </Stack.Navigator>
    )
}