import { Player } from './player';

export interface SetTitle {
  type: ActionTypes.setTitle;
  payload: string;
}

export interface SetActivePlayer {
  type: ActionTypes.setActivePlayer;
  payload: Player;
}

export enum ActionTypes {
  setTitle = 'SetTitle',
  setActivePlayer = 'SetActivePlayer',
}

export type Actions = SetTitle | SetActivePlayer;
