import { Player } from '@/constants';

interface GridBlock {
  player: Player;
  active: boolean;
}

export type GridBlockType = GridBlock | undefined;
