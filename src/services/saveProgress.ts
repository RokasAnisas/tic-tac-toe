import { ApplicationState } from '@/store/types';
import { Storage } from '@/constants';
import { storageUtil } from '@/utils';
import store from '@/store/store';

const select = (state: ApplicationState) => {
  return state;
};

export const saveProgress = (): void => {
  let currentState: ApplicationState;

  const listener = () => {
    const previousState = currentState;
    currentState = select(store.getState());

    if (!currentState.freshLoad) {
      // Save grid
      if (previousState?.grid !== currentState.grid) {
        const gridAsString = JSON.stringify(currentState.grid);
        storageUtil.setItem(Storage.grid, gridAsString);
      }

      // Save score
      if (previousState?.score !== currentState.score) {
        const scoreAsString = JSON.stringify(currentState.score);
        storageUtil.setItem(Storage.score, scoreAsString);
      }

      // Save actionLog
      if (previousState?.actionLog !== currentState.actionLog) {
        const actionLogAsString = JSON.stringify(currentState.actionLog);
        storageUtil.setItem(Storage.actionLog, actionLogAsString);
      }

      // Save active player
      if (previousState?.activePlayer !== currentState.activePlayer) {
        const activePlayerAsString = JSON.stringify(currentState.activePlayer);
        storageUtil.setItem(Storage.activePlayer, activePlayerAsString);
      }
    }
  };

  store.subscribe(listener);
};
