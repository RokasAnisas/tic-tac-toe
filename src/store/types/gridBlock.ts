import { Player } from './player';

interface GridBlockType {
  player: Player;
  active: boolean;
}

export type GridBlock = GridBlockType | undefined;
