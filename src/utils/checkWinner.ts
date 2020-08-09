import { GridBlockType } from '@/store/types';

export const checkWinner = (grid: GridBlockType[]): void => {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winCombinations.forEach(combo => {
    const takeArray: GridBlockType[] = [];
    combo.forEach(comboIndex => {
      if (!!grid[comboIndex]) {
        takeArray.push(grid[comboIndex]);
      }
    });

    if (takeArray.length === 3) {
      const control = takeArray[0];
      const win = takeArray.every(item => item?.player === control?.player);

      if (win) {
        confirm(`${control?.player} Wins!`);
      }
    }
  });
};
