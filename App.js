import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './screens/screen01'
import Screen02 from './screens/screen02';
import Screen03 from './screens/screen03';

const Stack = createNativeStackNavigator()
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Screen01' component={Screen01} options={{headerShown: false}}/>
                <Stack.Screen name='Screen02' component={Screen02}
                    options={{
                        headerTitleStyle: {visibility: 'hidden'},
                        headerStyle: {
                            height: 100,
                        },
                    }}
                />
                <Stack.Screen name='Screen03' component={Screen03}
                    options={{
                        headerTitleStyle: {visibility: 'hidden'},
                        headerStyle: {
                            height: 100,
                        },
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}