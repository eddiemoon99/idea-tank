import actionTypes from '../constants/actionTypes';

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case actionTypes.auth:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};
