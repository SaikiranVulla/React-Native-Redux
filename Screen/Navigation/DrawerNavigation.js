import {
  Image,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  Alert,
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
import {EventRegister} from 'react-native-event-listeners';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import NotificationScreen from '../NotificationScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();
  const theme = useSelector(state => state.ThemeReducer);
  const dispatch = useDispatch();
  const registedDetails = useSelector(
    state => state.UserReducer.registeredUser,
  );
  console.log(registedDetails, 'registedDetails');

  console.log(theme, 'drawerNavigation');

  const logout = () => {
    Alert.alert(
      'Logout',
      'Are you sure? You want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            auth()
              .signOut()
              .then(() => navigation.navigate('LoginStack'))
              .catch(error => {
                console.log(error);
                if (error.code === 'auth/no-current-user')
                  navigation.navigate('LoginStack');
                else alert(error);
              });
          },
        },
      ],
      {cancelable: false},
    );
  };

  const CustomDrawerContent = props => {
    return (
      <DrawerContentScrollView style={{flex: 1, backgroundColor: '#C2CDA5'}}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 8,
            marginRight: 10,
          }}>
          <FontIcon name="edit" size={22} color="#ffffff" />
        </TouchableOpacity>
        <View style={{marginTop: 10, alignItems: 'center', marginBottom: 10}}>
          <Image
            source={require('../../assets/user.jpg')}
            style={{width: 150, height: 150, borderRadius: 75}}
          />
          <Text style={{fontSize: 20, fontWeight: '700', color: '#fff'}}>
            {registedDetails?.displayName}
          </Text>
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
            onValueChange={val => {
              EventRegister.emit('changeThemeEvent', val);
              setIsEnabled(val);
            }}
            value={isEnabled}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginTop: 15,
            justifyContent: 'space-between',
          }}>
          <Text>SignOut</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{marginRight: 10}}
            onPress={() => logout()}>
            <MaterialIcon name="logout" size={22} color="red" />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#45B5AA',
          height: 80,
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
            <TouchableOpacity style={styles.headerRight} onPress={()=>navigation.navigate('Notification')}>
              <Icon name="bell" size={20} color="#fff" />
            </TouchableOpacity>
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
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notifications',
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
