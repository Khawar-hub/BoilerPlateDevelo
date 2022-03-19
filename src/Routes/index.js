import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import {useSelector} from 'react-redux';
import Loader from '../components/Loader'
import BottomTab from './BottomTabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function Routes() {
    const isLogin = useSelector(state => state.Auth.isLogin)
  return (
    <NavigationContainer>
      <Loader/>
      {isLogin ? (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="BottomTab" headerMode="none">
          <Stack.Screen name="Bottomtab" component={BottomTab} />
        </Stack.Navigator>
        
      )}
    </NavigationContainer>
  );
}

