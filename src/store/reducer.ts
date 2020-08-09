import { ApplicationState } from './types';
import { Actions, ActionTypes } from './types';
import initialState from './initialState';

const reducer = (state = initialState, action: Actions): ApplicationState => {
  switch (action.type) {
    case ActionTypes.setTitle: {
      return {
        ...state,
        title: action.payload,
      };
    }
    case ActionTypes.setActivePlayer: {
      return {
        ...state,
        activePlayer: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
