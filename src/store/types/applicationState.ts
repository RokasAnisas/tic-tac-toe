import { Player, GridBlockType } from './';

export interface ApplicationState {
  activePlayer: Player;
  grid: Array<GridBlockType>;
}
