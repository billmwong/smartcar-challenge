import { combineReducers } from 'redux';

const response = (state = '', action) => {
  switch (action.type) {
    case 'RECEIVE_RESPONSE':
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  response,
});
