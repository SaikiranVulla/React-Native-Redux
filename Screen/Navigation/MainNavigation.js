import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginStackNavigator from './Stack-Navigators/LoginStackNavigator';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginStack" component={LoginStackNavigator} />
      <Stack.Screen name="DrawerStack" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
