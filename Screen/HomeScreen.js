import React, {useEffect, useState} from 'react';
import {
  setCurrentUser,
  getCurrentUser,
  differentUser,
  setRegisteredUser
} from '../Redux/User/UserActions';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Button, StyleSheet} from 'react-native';

const HomeScreen = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.UserReducer.userDetails);
  console.log(userDetails, 'Detail');
  const registedDetails = useSelector(state => state.UserReducer.registeredUser)
  console.log(registedDetails, 'registedDetails');

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      console.log('user', JSON.stringify(user));
      dispatch(setRegisteredUser(user));
      setUser(user);
      moveToAsyncStorage();
    });
    return subscriber;
  }, []);

  // console.log(user.uid, 'rtyuipo');

  const moveToAsyncStorage = async () => {
    await AsyncStorage.setItem('isSigned', JSON.stringify(user.uid));
  };

  console.log(user, 'UserDetailsfg');

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

export default HomeScreen;
