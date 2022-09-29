import actionTypes from '../constants/actionTypes';

const authReducers = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionTypes.auth:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      console.log('action here?', action);
      console.log('state: ', state);
      return { ...state, authData: action?.data };
    case actionTypes.logout:
      localStorage.removeItem('profile');
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducers;
