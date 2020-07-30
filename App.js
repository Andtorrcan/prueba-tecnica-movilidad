
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//--Paginas
import Home from './screens/Home';
import LastRecord from './screens/LastRecord';

const Stack = createStackNavigator();

function NavStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Reporte movilidad' }}
            />
          <Stack.Screen
                name="LastRecord"
                component={LastRecord}
                options={{ title: 'Reporte movilidad' }}
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