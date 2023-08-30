import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Locations = () => {
  return (
    <View>
      <Text>LocationStack</Text>
    </View>
  );
};

const LocationStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Location" component={Locations} />
    </Stack.Navigator>
  );
};

export default LocationStackNavigator;

const styles = StyleSheet.create({});
