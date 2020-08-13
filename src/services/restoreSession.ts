import { Storage } from '@/constants';
import { storageUtil } from '@/utils';
import { GridBlockType } from '@/store/types';
import { SetGrid } from '@/store/actions';

export const restoreSession = (): void => {
  console.log('james');
  const grid = storageUtil.getItem(Storage.grid);
  const gridParsed: GridBlockType[] = JSON.parse(grid!);

  console.log(gridParsed);

  SetGrid(gridParsed);
};
