import { Player } from '@/constants';
import { GridBlockType, ConfirmDialogPayload, LogItem } from './';

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

export interface AddLog {
  type: ActionTypes.addLog;
  payload: LogItem;
}

export interface SetFreshLoad {
  type: ActionTypes.setFreshLoad;
  payload: boolean;
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
  addLog = 'AddLog',
  setFreshLoad = 'SetFreshLoad',
}

export type Actions =
  | SetActivePlayer
  | UpdateGridItem
  | SetGrid
  | ResetGrid
  | ShowConfirmDialog
  | HideConfirmDialog
  | BumpScore
  | SetGridLock
  | AddLog
  | SetFreshLoad;
