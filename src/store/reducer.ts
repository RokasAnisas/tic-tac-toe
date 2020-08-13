import { ApplicationState, Actions, ActionTypes } from './types';
import { Player } from '@/constants';
import initialState from './initialState';

const reducer = (state = initialState, action: Actions): ApplicationState => {
  switch (action.type) {
    case ActionTypes.setActivePlayer: {
      return {
        ...state,
        activePlayer: action.payload,
      };
    }
    case ActionTypes.updateGridItem: {
      return {
        ...state,
        grid: state.grid.map((item, index) =>
          action.payload.id === index ? action.payload.content : item
        ),
      };
    }
    case ActionTypes.setGrid: {
      return {
        ...state,
        grid: action.payload,
      };
    }
    case ActionTypes.resetGrid: {
      return {
        ...state,
        grid: initialState.grid,
      };
    }
    case ActionTypes.showConfirmDialog: {
      return {
        ...state,
        confirmDialog: {
          active: true,
          ...action.payload,
        },
      };
    }
    case ActionTypes.hideConfirmDialog: {
      return {
        ...state,
        confirmDialog: {
          active: false,
        },
      };
    }
    case ActionTypes.setGridLock: {
      return {
        ...state,
        gridLock: action.payload,
      };
    }
    case ActionTypes.bumpScore: {
      return {
        ...state,
        score: {
          x: action.payload === Player.x ? (state.score.x += 1) : state.score.x,
          o: action.payload === Player.o ? (state.score.o += 1) : state.score.o,
        },
      };
    }
    case ActionTypes.addLog: {
      return {
        ...state,
        actionLog: [...state.actionLog, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
