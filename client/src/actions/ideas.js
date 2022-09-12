import actionTypes from '../constants/actionTypes';
import * as api from '../api';

// Actions

export const getIdeas = () => async (dispatch) => {
  try {
    const { data } = await api.fetchIdeas();

    dispatch({ type: actionTypes.fetchAll, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createIdea = (idea) => async (dispatch) => {
  try {
    const { data } = await api.createIdea(idea);

    dispatch({ type: actionTypes.create, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateIdea = (id, idea) => async (dispatch) => {
  try {
    const { data } = await api.updateIdea(id, idea);

    dispatch({ type: actionTypes.update, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteIdea = (id) => async (dispatch) => {
  try {
    await api.deleteIdea(id);

    dispatch({ type: actionTypes.delete, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const upvoteIdea = (id) => async (dispatch) => {
  try {
    const { data } = await api.upvoteIdea(id);

    dispatch({ type: actionTypes.upvote, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const downvoteIdea = (id) => async (dispatch) => {
  try {
    const { data } = await api.downvoteIdea(id);

    dispatch({ type: actionTypes.downvote, payload: data });
  } catch (error) {
    console.log(error);
  }
};
