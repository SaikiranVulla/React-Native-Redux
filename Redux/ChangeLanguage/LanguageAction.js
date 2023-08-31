import {SET_LANGUAGE} from './ActionTypes';

export const setLanguage = lng => ({
  type: SET_LANGUAGE,
  payload: lng,
});

export const changeToPreferredLanguage = (lng, i18n) => {
  return async dispatch => {
    console.log(lng, 'redert');
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
  };
};
