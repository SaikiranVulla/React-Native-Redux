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
import {useTheme} from '@react-navigation/native';
import {changeToPreferredLanguage} from '../../../Redux/ChangeLanguage/LanguageAction';
const Stack = createNativeStackNavigator();

const Contact = () => {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const {t, i18n} = useTranslation();
  const [openLanguages, setOpenLanguages] = useState(false);

  const changeLng = lng => {
    console.log(lng, 'redert');
    dispatch(changeToPreferredLanguage(lng, i18n));
    setOpenLanguages(false);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}>
      <Modal
        visible={openLanguages}
        onRequestClose={() => setOpenLanguages(false)}>
        <SafeAreaView
          style={{flex: 1, marginTop: 30, backgroundColor: colors.background}}>
          <FlatList
            data={Object.keys(languageResource)}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => changeLng(item)}>
                <Text style={{color: colors.text}}>
                  {languagesList[item].nativeName}
                </Text>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </Modal>
      <Text style={{color: colors.text, fontSize: 18, fontWeight: 'bold'}}>
        {t('welcome')}
      </Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          setOpenLanguages(true);
        }}
        style={{marginTop: 15}}>
        <Text style={{color: colors.text, fontWeight: 'bold'}}>
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
