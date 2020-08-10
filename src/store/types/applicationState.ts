import { GridBlockType, ConfirmDialogType } from './';
import { Player } from '@/constants';

export interface ApplicationState {
  activePlayer: Player;
  grid: Array<GridBlockType>;
  confirmDialog: ConfirmDialogType;
}
