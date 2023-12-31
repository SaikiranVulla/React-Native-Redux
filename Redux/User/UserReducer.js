import {ADD_CURRENT_USER_ID, SET_CURRENT_USER, REGISTERED_USER} from './ActionsType';

const initialState = {
  userDetails: [],
  currentUserId: null,
  registeredUser: []
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CURRENT_USER_ID: {
      return {currentUserId: action.payload};
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        userDetails: action.payload,
      };
    }
    case REGISTERED_USER: {
      return {
        ...state,
        registeredUser: action.payload
      }
    }
    default:
      return state;
  }
}
