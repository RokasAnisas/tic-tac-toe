import { Player } from './player';

interface GridBlock {
  player: Player;
  active: boolean;
}

export type GridBlockType = GridBlock | undefined;
