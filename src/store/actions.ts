import store from './store';
import { ActionTypes, Player } from './types';

export const SetChapter = (payload: string): void => {
  store.dispatch({ type: ActionTypes.setTitle, payload: payload });
};

export const SetActivePlayer = (payload: Player): void => {
  store.dispatch({ type: ActionTypes.setActivePlayer, payload: payload });
};
