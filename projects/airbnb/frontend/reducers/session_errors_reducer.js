import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";

const defaultState = {
  errors: []
}

const sessionErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      nextState['errors'] = action.errors;
      return nextState;
    case RECEIVE_CURRENT_USER:
      nextState['errors'] = [];
      return nextState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;