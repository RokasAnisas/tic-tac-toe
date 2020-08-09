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

export enum ActionTypes {
  setActivePlayer = 'SetActivePlayer',
  updateGrid = 'UpdateGrid',
}

export type Actions = SetActivePlayer | UpdateGrid;
