import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeStackNavigator from './Stack-Navigators/HomeStackNavigator';
import MyRewardsStackNavigator from './Stack-Navigators/MyRewardsStackNavigator';
import LocationStackNavigator from './Stack-Navigators/LocationStackNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../Redux/Theme/ThemeActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();
  const theme = useSelector(state => state.ThemeReducer);
  const dispatch = useDispatch();

  console.log(theme, 'drawerNavigation');

  const CustomDrawerContent = props => {
    const toggleSwitch = () => {
      setIsEnabled(!isEnabled);
      dispatch(changeTheme(!isEnabled));
      AsyncStorage.setItem("theme",  JSON.stringify(!isEnabled));
    };

    return (
      <DrawerContentScrollView style={{backgroundColor: '#C2CDA5'}}>
        <View style={{marginTop: 40, alignItems: 'center'}}>
          <Text>Profile Pic</Text>
        </View>
        {Object.entries(props.descriptors).map(([key, descriptor], index) => {
          const focused = index === props.state.index;
          return (
            <DrawerItem
              key={key}
              label={() => (
                <Text
                  style={
                    focused ? styles.drawerLabelFocused : styles.drawerLabel
                  }>
                  {descriptor.options.title}
                </Text>
              )}
              onPress={() =>
                descriptor.navigation.navigate(descriptor.route.name)
              }
              style={[
                styles.drawerItem,
                focused ? styles.drawerItemFocused : null,
              ]}
            />
          );
        })}
        <View style={{borderBottomWidth: 1, borderBottomColor: '#ffffff'}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 15,
          }}>
          <Text>DarkMode</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#45B5AA',
          height: 50,
        },
        headerLeft: () => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.toggleDrawer()}
            style={{
              marginLeft: 15,
            }}>
            <Icon name="bars" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabNavigator}
        options={{
          headerTitle: 'Game Over',
          title: 'Home',
          headerRight: () => (
            <View style={styles.headerRight}>
              <Icon name="bell" size={20} color="#fff" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="MyRewardStack"
        component={MyRewardsStackNavigator}
        options={{
          title: 'My Rewards',
          headerTitle: () => <Text style={styles.headerTitle}>My Rewards</Text>,
        }}
      />
      <Drawer.Screen
        name="LocationsStack"
        component={LocationStackNavigator}
        options={{
          title: 'Locations',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  pressedButton: {
    backgroundColor: 'red',
    padding: 10,
  },
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: '#FFFFFF',
  },
});
