import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home, Products, Details } from '../screens'
import {View, Button} from 'react-native'
import {Header} from '../Components'

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
              initialRouteName="Home" 
              screenOptions={({ route, navigation }) => ({
                headerShown: false,
                /*header: () => (
                    <View style={{ flexDirection: 'row' }}>
                        <Button onPress={() => navigation.goBack()} title='Go Back'/>
                        <Header title={route.name === 'Home' ? 'Categories' : 'Otro Titulo'} />
                    </View>
                ),*/
            })}
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Products' component={Products} />
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator