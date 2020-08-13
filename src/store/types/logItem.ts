import { Player } from '@/constants';
import { GridBlockType } from './';

export interface LogItem {
  player?: Player;
  message: string;
  gridSnapshot?: GridBlockType[];
  accent?: boolean;
}
