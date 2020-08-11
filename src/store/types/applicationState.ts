import { GridBlockType, ConfirmDialogType, Score } from './';
import { Player } from '@/constants';

export interface ApplicationState {
  activePlayer: Player;
  grid: Array<GridBlockType>;
  confirmDialog: ConfirmDialogType;
  gridLock: boolean;
  score: Score;
}
