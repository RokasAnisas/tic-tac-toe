import { storageUtil } from '@/utils';
import { Storage } from '@/constants';

export const checkPreviousSession = async (): Promise<boolean> => {
  const grid = storageUtil.getItem(Storage.grid);
  const score = storageUtil.getItem(Storage.score);
  const actionLog = storageUtil.getItem(Storage.actionLog);

  if (grid && score && actionLog) {
    return true;
  }

  return false;
};
