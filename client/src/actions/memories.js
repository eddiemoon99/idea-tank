import { speedDialIconClasses } from '@mui/material';
import * as api from '../api';

// Action Creators

export const getMemories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMemories();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createMemory = (memory) => async (dispatch) => {
  try {
    const { data } = await api.createMemory(memory);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateMemory = (id, memory) => async (dispatch) => {
  try {
    const { data } = await api.updateMemory(id, memory);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMemory = (id) => async (dispatch) => {
  try {
    await api.deleteMemory(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likeMemory = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeMemory(id);

    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log(error);
  }
};
