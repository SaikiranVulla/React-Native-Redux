import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../HomeScreen';
import ProfileScreen from '../../ProfileScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen}/>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
