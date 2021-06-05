import { SEARCH_REDUCER_ACTION_TYPES } from '../constants/application';

const INITIAL_STATE = [];

const searchReducer = function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case SEARCH_REDUCER_ACTION_TYPES.POST_SEARCH_RESULT:
        return action.payload;
      default:
        return state;
    }
  };

export default searchReducer;