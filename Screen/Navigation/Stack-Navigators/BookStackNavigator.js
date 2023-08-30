import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

const Book = () => {
  return (
    <View>
      <Text>BookStackNavigator</Text>
      <Icon name='home' size={24}/>
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

export default BookStackNavigator;

const styles = StyleSheet.create({});
