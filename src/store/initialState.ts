import { ApplicationState, Player, GridBlock } from './types';

const initialGrid = (): GridBlock[] => {
  const _grid = [];
  for (let i = 0; i < 9; i++) {
    _grid.push(undefined);
  }
  return _grid;
};

const initialState: ApplicationState = {
  activePlayer: Player.x,
  grid: initialGrid(),
};

export default initialState;
