import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../LoginScreen';
import RegisterScreen from '../../RegisterScreen';

const Stack = createNativeStackNavigator();


const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default LoginStackNavigator;

const styles = StyleSheet.create({});
