import store from './store';
import { ActionTypes, Player } from './types';

export const SetActivePlayer = (payload: Player): void => {
  store.dispatch({ type: ActionTypes.setActivePlayer, payload: payload });
};
