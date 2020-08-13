import { storageUtil } from '@/utils';
import { Storage } from '@/constants';

export const checkPreviousSession = async (): Promise<boolean> => {
  const grid = storageUtil.getItem(Storage.grid);
  const score = storageUtil.getItem(Storage.score);
  const actionLog = storageUtil.getItem(Storage.actionLog);
  const activePlayer = storageUtil.getItem(Storage.activePlayer);

  if (grid && score && actionLog && activePlayer) {
    return true;
  }

  return false;
};
