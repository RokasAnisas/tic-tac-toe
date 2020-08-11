import { Player } from '@/constants';
import { GridBlockType, ConfirmDialogPayload } from './';

export interface SetActivePlayer {
  type: ActionTypes.setActivePlayer;
  payload: Player;
}

export interface UpdateGridItem {
  type: ActionTypes.updateGridItem;
  payload: {
    id: number;
    content: GridBlockType;
  };
}

export interface SetGrid {
  type: ActionTypes.setGrid;
  payload: GridBlockType[];
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

export interface BumpScore {
  type: ActionTypes.bumpScore;
  payload: Player;
}

export enum ActionTypes {
  setActivePlayer = 'SetActivePlayer',
  updateGridItem = 'UpdateGridItem',
  setGrid = 'SetGrid',
  resetGrid = 'ResetGrid',
  showConfirmDialog = 'ShowConfirmDialog',
  hideConfirmDialog = 'HideConfirmDialog',
  setGridLock = 'SetGridLock',
  bumpScore = 'BumpScore',
}

export type Actions =
  | SetActivePlayer
  | UpdateGridItem
  | SetGrid
  | ResetGrid
  | ShowConfirmDialog
  | HideConfirmDialog
  | BumpScore
  | SetGridLock;
