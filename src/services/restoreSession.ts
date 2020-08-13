import { Storage } from '@/constants';
import { storageUtil } from '@/utils';
import { GridBlockType, LogItem } from '@/store/types';
import { SetGrid, SetLog } from '@/store/actions';

export const restoreSession = (): void => {
  const grid = storageUtil.getItem(Storage.grid);
  const gridParsed: GridBlockType[] = JSON.parse(grid!);

  const actionLog = storageUtil.getItem(Storage.actionLog);
  const actionLogParsed: LogItem[] = JSON.parse(actionLog!);


  SetGrid(gridParsed);
  SetLog(actionLogParsed);
};
