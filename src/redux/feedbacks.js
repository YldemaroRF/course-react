import * as ActionTypes from './ActionTypes';

export const Feedbacks = (state = { errMess: null, feedbacks:[]}, action) => {
  switch (action.type) {

    case ActionTypes.ADD_FEEDBACK:
        var feedbacks = action.payload;
        feedbacks.id = state.feedbacks.length;
        feedbacks.date = new Date().toISOString();
        return { ...state, feedbacks: state.feedbacks.concat(feedbacks)};

    default:
      return state;
  }
};