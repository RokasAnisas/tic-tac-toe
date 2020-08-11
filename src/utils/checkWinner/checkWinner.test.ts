import { Player } from '@/constants';
import { GridBlockType } from '@/store/types';
import { checkWinner } from './checkWinner';

describe('checkWinner', () => {
  const emptyGrid: GridBlockType[] = [];
  const falseyGrid: GridBlockType[] = [
    {
      player: Player.o,
    },
    {
      player: Player.o,
    },
    {
      player: Player.x,
    },
  ];

  const winnerO: GridBlockType[] = [
    {
      player: Player.o,
    },
    {
      player: Player.o,
    },
    {
      player: Player.o,
    },
  ];

  it('should return undefined grid is empty', () => {
    expect(checkWinner(emptyGrid)).toBeFalsy();
  });

  it('should return undefined grid is falsey', () => {
    expect(checkWinner(falseyGrid)).toBeFalsy();
  });

  it('should return the winner on correct grid', () => {
    const testResult = {
      combination: [0, 1, 2],
      player: Player.o,
    };

    expect(checkWinner(winnerO)).toStrictEqual(testResult);
  });
});
