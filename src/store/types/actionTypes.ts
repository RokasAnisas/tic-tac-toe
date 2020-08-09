import { Player } from '@/constants';

export interface SetActivePlayer {
  type: ActionTypes.setActivePlayer;
  payload: Player;
}

export enum ActionTypes {
  setActivePlayer = 'SetActivePlayer',
}

export type Actions = SetActivePlayer;
