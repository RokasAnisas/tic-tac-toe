import { ApplicationState, Player, GridBlockType } from './types';
import { gridSize } from '@/constants/gridSize';

const initialGrid = (): GridBlockType[] => {
  const _grid = [];
  for (let i = 0; i < gridSize; i++) {
    _grid.push(undefined);
  }
  return _grid;
};

const initialState: ApplicationState = {
  activePlayer: Player.x,
  grid: initialGrid(),
};

export default initialState;
