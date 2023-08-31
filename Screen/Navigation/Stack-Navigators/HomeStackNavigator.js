import {Button, StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  setCurrentUser,
  getCurrentUser,
  differentUser,
} from '../../../Redux/User/UserActions';
import {useSelector, useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

const Home = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.UserReducer.userDetails);
  console.log(userDetails, 'Detail');


  return (
    <View>
      <Button title="API Call" onPress={() => dispatch(getCurrentUser())} />
      <Button
        title="API Call Different User"
        onPress={() => dispatch(differentUser())}
      />
    </View>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
