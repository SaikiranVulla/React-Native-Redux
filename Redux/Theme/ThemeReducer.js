import {ADD_THEME} from './ActionType';

const initialState = false;

export default function ThemeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_THEME: {
      return {state:action.payload}
    }
    default:
      return state;
  }
}
