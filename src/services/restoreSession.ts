import { Storage, Player } from '@/constants';
import { storageUtil } from '@/utils';
import { GridBlockType, LogItem, Score } from '@/store/types';
import { SetGrid, SetLog, SetActivePlayer, SetScore } from '@/store/actions';

export const restoreSession = (): void => {
  const grid: GridBlockType[] = JSON.parse(storageUtil.getItem(Storage.grid)!);
  const actionLog: LogItem[] = JSON.parse(storageUtil.getItem(Storage.actionLog)!);
  const activePlayer: Player = JSON.parse(storageUtil.getItem(Storage.activePlayer)!);
  const score: Score = JSON.parse(storageUtil.getItem(Storage.score)!);


  SetGrid(grid);
  SetLog(actionLog);
  SetActivePlayer(activePlayer);
  SetScore(score);
};
