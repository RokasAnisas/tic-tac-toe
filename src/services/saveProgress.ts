import { ApplicationState } from '@/store/types';
import { Storage } from '@/constants';
import { storageUtil } from '@/utils';
import store from '@/store/store';


const select = (state: ApplicationState) => {
  return state;
};

export const saveProgress = (): void => {
  let currentValue: ApplicationState;

  const listener = () => {
    const previousValue = currentValue;
    currentValue = select(store.getState());

    // Save grid
    if (previousValue?.grid !== currentValue.grid) {
      const gridAsString = JSON.stringify(currentValue.grid);
      storageUtil.setItem(Storage.grid, gridAsString);
    }

    // Save score
    if (previousValue?.score !== currentValue.score) {
      const scoreAsString = JSON.stringify(currentValue.score);
      storageUtil.setItem(Storage.score, scoreAsString);
    }

    // Save actionLog
    if (previousValue?.actionLog !== currentValue.actionLog) {
      const actionLogAsString = JSON.stringify(currentValue.actionLog);
      storageUtil.setItem(Storage.actionLog, actionLogAsString);
    }
  };

  store.subscribe(listener);
};
