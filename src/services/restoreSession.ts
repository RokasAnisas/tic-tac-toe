import { Storage, Player } from '@/constants';
import { storageUtil } from '@/utils';
import { GridBlockType, LogItem } from '@/store/types';
import { SetGrid, SetLog, SetActivePlayer } from '@/store/actions';

export const restoreSession = (): void => {
  const grid = storageUtil.getItem(Storage.grid);
  const gridParsed: GridBlockType[] = JSON.parse(grid!);

  const actionLog = storageUtil.getItem(Storage.actionLog);
  const actionLogParsed: LogItem[] = JSON.parse(actionLog!);

  const activePlayer = storageUtil.getItem(Storage.activePlayer);
  const activePlayerParsed: Player = JSON.parse(activePlayer!);


  SetGrid(gridParsed);
  SetLog(actionLogParsed);
  SetActivePlayer(activePlayerParsed);
};
