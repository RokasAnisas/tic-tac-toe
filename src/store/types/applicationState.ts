import { Player, GridBlock } from './';

export interface ApplicationState {
  activePlayer: Player;
  grid: Array<GridBlock | undefined>;
}
