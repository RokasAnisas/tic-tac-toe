import { Storage, Player } from '@/constants';
import { storageUtil } from '@/utils';
import { GridBlockType, LogItem } from '@/store/types';
import { SetGrid, SetLog, SetActivePlayer } from '@/store/actions';

export const restoreSession = (): void => {
  const grid: GridBlockType[] = JSON.parse(storageUtil.getItem(Storage.grid)!);
  const actionLog: LogItem[] = JSON.parse(storageUtil.getItem(Storage.actionLog)!);
  const activePlayer: Player = JSON.parse(storageUtil.getItem(Storage.activePlayer)!);


  SetGrid(grid);
  SetLog(actionLog);
  SetActivePlayer(activePlayer);
};
