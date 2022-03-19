import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
const Stack = createStackNavigator();
export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    );
}