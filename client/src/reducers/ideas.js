import actionTypes from '../constants/actionTypes';

// return depending on which action
const ideasReducers = (ideas = [], action) => {
  switch (action.type) {
    case actionTypes.delete:
      return ideas.filter((idea) => idea._id !== action.payload);
    case actionTypes.update:
    case actionTypes.upvote:
    case actionTypes.downvote:
      return ideas.map((idea) =>
        idea?._id === action?.payload?._id ? action?.payload : idea
      );
    case actionTypes.fetchAll:
      return action.payload;
    case actionTypes.create:
      return [...ideas, action.payload];
    default:
      return ideas;
  }
};

export default ideasReducers;
