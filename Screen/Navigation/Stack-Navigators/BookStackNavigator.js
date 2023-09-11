import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UpdatedComponent from '../../../HOC/ClickingComponent';

const Stack = createNativeStackNavigator();

const Book = ({counter, handleClicking}) => {
  return (
    <View>
      <Text>BookStackNavigator</Text>
      <Button onPress={() => handleClicking()} title="Increase Count" />
      <Text>Counter : {counter}</Text>
    </View>
  );
};

const BookStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Book" component={Book} />
    </Stack.Navigator>
  );
};

export default UpdatedComponent(BookStackNavigator);

const styles = StyleSheet.create({});
