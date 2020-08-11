import { Player } from '@/constants';

interface GridBlock {
  player: Player;
  win?: boolean;
}

export type GridBlockType = GridBlock | null;
