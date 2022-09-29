import actionTypes from '../constants/actionTypes';
import * as api from '../api';

// Actions

export const signIn = (inputs, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(inputs);

    dispatch({ type: actionTypes.auth, data });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (inputs, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(inputs);

    dispatch({ type: actionTypes.auth, data });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
