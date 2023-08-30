import axios from 'axios';
import {ADD_CURRENT_USER_ID, SET_CURRENT_USER} from './ActionsType';

export const addCurrentUserId = id => ({
  type: ADD_CURRENT_USER_ID,
  payload: id,
});

export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  payload: currentUser,
});

export const getCurrentUser = () => {
  return async dispatch => {
    try {
      const apiReq = await fetch(
        'http://dummy.restapiexample.com/api/v1/employees',
        {
          method: 'GET',
        },
      );
      console.log(apiReq);
      const apiData = await apiReq.json(); // Extract data from response
      dispatch(setCurrentUser(apiData.data));
      return apiData || [];
    } catch (error) {
      console.error(error);
    }
  };
};

export const differentUser = () => {
  return async dispatch => {
    try {
      axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users',
      }).then(response => {
        console.log(response.data);
        dispatch(setCurrentUser(response.data));
      });
    } catch (error) {
      console.log(error);
    }
  };
};
