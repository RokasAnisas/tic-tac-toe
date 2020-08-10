import { Player } from '@/constants';
import { GridBlockType, ConfirmDialogPayload } from './';

export interface SetActivePlayer {
  type: ActionTypes.setActivePlayer;
  payload: Player;
}

export interface UpdateGrid {
  type: ActionTypes.updateGrid;
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

export enum ActionTypes {
  setActivePlayer = 'SetActivePlayer',
  updateGrid = 'UpdateGrid',
  resetGrid = 'ResetGrid',
  showConfirmDialog = 'ShowConfirmDialog',
  hideConfirmDialog = 'HideConfirmDialog',
}

export type Actions =
  | SetActivePlayer
  | UpdateGrid
  | ResetGrid
  | ShowConfirmDialog
  | HideConfirmDialog;
