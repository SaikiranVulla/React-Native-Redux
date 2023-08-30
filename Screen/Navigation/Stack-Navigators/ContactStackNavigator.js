import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {addCurrentUserId} from '../../../Redux/User/UserActions';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import i18next, {languageResource} from '../../../services/i18next';
import languagesList from '../../../services/languagesList.json';
const Stack = createNativeStackNavigator();

const Contact = () => {
  const {t, i18n} = useTranslation();
  const [openLanguages, setOpenLanguages] = useState(false);

  const changeLng = lng => {
    i18n.changeLanguage(lng);
    setOpenLanguages(false);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191266',
      }}>
      <Modal
        visible={openLanguages}
        onRequestClose={() => setOpenLanguages(false)}>
        <View style={{flex: 1, marginTop: 20, backgroundColor: '#191266'}}>
          <FlatList
            data={Object.keys(languageResource)}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => changeLng(item)}>
                <Text style={{color: '#ffffff'}}>
                  {languagesList[item].nativeName}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
      <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
        {t('welcome')}
      </Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          setOpenLanguages(true);
        }}
        style={{marginTop: 15}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          {t('change-language')}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;

const styles = StyleSheet.create({});
