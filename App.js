import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './Redux/Store';
import List from './Screen/List';
import {PersistGate} from 'redux-persist/integration/react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import DrawerNavigation from './Screen/Navigation/DrawerNavigation';
import {EventRegister} from 'react-native-event-listeners';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NotificationServices, requestUserPermission } from './Utils/PushNotification';
import ForeGroundHandler from './Utils/ForeGroundHandler';

const App = () => {
  const [darkApp, setDarkApp] = useState(false);
  const appTheme = darkApp ? DarkTheme : DefaultTheme;

  console.log(darkApp, 'darkApp');

  useEffect(() => {
    NotificationServices()
    requestUserPermission()
    getAsyncValue();
    let eventListener = EventRegister.addEventListener(
      'changeThemeEvent',
      data => {
        // console.log(data,"Swtich");
        AsyncStorage.setItem('SetThemeValue', JSON.stringify(data));
        setDarkApp(data);
      },
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  const getAsyncValue = async () => {
    if (darkApp == undefined) {
      const getThemeValue = await AsyncStorage.getItem('SetThemeValue');
      console.log('HII', getThemeValue);
      setDarkApp(getThemeValue);
    } else {
      console.log('Noooooooooooooooo');
    }
  };
  return (
    <>
    <ForeGroundHandler/>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer theme={appTheme}>
          <DrawerNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
    </>
    
  );
};

export default App;
