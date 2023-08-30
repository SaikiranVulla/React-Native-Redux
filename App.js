import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './Redux/Store';
import List from './Screen/List';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer, DefaultTheme,DarkTheme} from '@react-navigation/native';
import DrawerNavigation from './Screen/Navigation/DrawerNavigation';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer theme={DefaultTheme}>
          <DrawerNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
