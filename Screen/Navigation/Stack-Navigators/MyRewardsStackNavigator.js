import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyRewards = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  return (
    <View style={styles.container}>
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        isPressed && styles.buttonPressed,
        pressed && { backgroundColor: 'lightgray' }, // Adding a visual effect when pressing
      ]}
    >
      <Text style={styles.buttonText}>Press Me</Text>
    </Pressable>
  </View>
  );
};

const MyRewardsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyRewards" component={MyRewards} />
    </Stack.Navigator>
  );
};

export default MyRewardsStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
