import { ApplicationState } from './types';
import { Actions, ActionTypes } from './types';
import initialState from './initialState';

const reducer = (state = initialState, action: Actions): ApplicationState => {
  switch (action.type) {
    case ActionTypes.setActivePlayer: {
      return {
        ...state,
        activePlayer: action.payload,
      };
    }
    case ActionTypes.updateGrid: {
      return {
        ...state,
        grid: state.grid.map((item, index) =>
          action.payload.id === index ? action.payload.content : item
        ),
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
