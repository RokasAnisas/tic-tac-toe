import { Player } from '@/constants';
import { GridBlockType } from './';

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

export enum ActionTypes {
  setActivePlayer = 'SetActivePlayer',
  updateGrid = 'UpdateGrid',
  resetGrid = 'ResetGrid',
}

export type Actions = SetActivePlayer | UpdateGrid | ResetGrid;
