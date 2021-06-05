import { SEARCH_REDUCER_ACTION_TYPES } from '../constants/application';

const searchReducer = function (state = null, action) {
    switch (action.type) {
      case SEARCH_REDUCER_ACTION_TYPES.POST_SEARCH_RESULT:
        return action.payload;
      default:
        return state;
    }
  };

export default searchReducer;