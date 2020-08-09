import { checkWinner } from './';
import { GridBlockType } from '@/store/types';

export const checkTie = (grid: GridBlockType[]): boolean => {
  const allBlocksFilled = grid.every(item => item !== undefined);

  if (allBlocksFilled) {
    const winner = checkWinner(grid);

    if (!winner) {
      return true;
    }
  }

  return false;
};
