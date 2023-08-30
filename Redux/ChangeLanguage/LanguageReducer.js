import {SET_LANGUAGE} from './ActionTypes';

const initialState = {
  languageSetting: 'en',
};

export default function LanguageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {languageSetting: action.payload};
    }
    default:
      return state;
  }
}
