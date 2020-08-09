import store from './store';
import { Player } from '@/constants';
import { ActionTypes } from './types';

export const SetActivePlayer = (payload: Player): void => {
  store.dispatch({ type: ActionTypes.setActivePlayer, payload: payload });
};
