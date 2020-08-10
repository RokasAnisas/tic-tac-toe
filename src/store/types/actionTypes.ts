import { Player } from '@/constants';
import { GridBlockType, ConfirmDialogPayload } from './';

export interface SetActivePlayer {
  type: ActionTypes.setActivePlayer;
  payload: Player;
}

export interface UpdateGridItem {
  type: ActionTypes.UpdateGridItem;
  payload: {
    id: number;
    content: GridBlockType;
  };
}

export interface ResetGrid {
  type: ActionTypes.resetGrid;
}

export interface ShowConfirmDialog {
  type: ActionTypes.showConfirmDialog;
  payload: ConfirmDialogPayload;
}

export interface HideConfirmDialog {
  type: ActionTypes.hideConfirmDialog;
}

export interface SetGridLock {
  type: ActionTypes.setGridLock;
  payload: boolean;
}

export enum ActionTypes {
  setActivePlayer = 'SetActivePlayer',
  UpdateGridItem = 'UpdateGridItem',
  resetGrid = 'ResetGrid',
  showConfirmDialog = 'ShowConfirmDialog',
  hideConfirmDialog = 'HideConfirmDialog',
  setGridLock = 'SetGridLock',
}

export type Actions =
  | SetActivePlayer
  | UpdateGridItem
  | ResetGrid
  | ShowConfirmDialog
  | HideConfirmDialog
  | SetGridLock;
