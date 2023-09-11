import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

const NotificationScreen = () => {
  const [counter, setCounter] = useState(10);

  const handleClicking = () => {
    setCounter(counter + 1);
  };

  return (
    <View>
      <Text>NotificationScreen</Text>
      <Button onPress={() => handleClicking()} title="Increase Count" />
      <Text>Counter : {counter}</Text>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
