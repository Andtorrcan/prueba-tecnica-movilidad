
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//--Paginas
import Login from './screens/Login';
import Home from './screens/Home';


const Stack = createStackNavigator();

function NavStack() {
    return (
        <Stack.Navigator>
                 <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Prueba técnica' }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Prueba técnica' }}
            />
          
        </Stack.Navigator>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <NavStack />
        </NavigationContainer>
    );
};

export default App;