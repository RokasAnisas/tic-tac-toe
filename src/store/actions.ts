import store from './store';
import { Player } from '@/constants';
import { ActionTypes, GridBlockType } from './types';

export const SetActivePlayer = (payload: Player): void => {
  store.dispatch({ type: ActionTypes.setActivePlayer, payload: payload });
};

export const UpdateGrid = (payload: {
  content: GridBlockType;
  id: number;
}): void => {
  store.dispatch({ type: ActionTypes.updateGrid, payload: payload });
};
