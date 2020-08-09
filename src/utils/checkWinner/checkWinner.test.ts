import { Player } from '@/constants';
import { GridBlockType } from '@/store/types';
import { checkWinner } from './checkWinner';

describe('checkWinner', () => {
  const emptyGrid: GridBlockType[] = [];
  const falseyGrid: GridBlockType[] = [
    {
      active: true,
      player: Player.o,
    },
    {
      active: true,
      player: Player.o,
    },
    {
      active: true,
      player: Player.x,
    },
  ];

  const winnerO: GridBlockType[] = [
    {
      active: true,
      player: Player.o,
    },
    {
      active: true,
      player: Player.o,
    },
    {
      active: true,
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
    expect(checkWinner(winnerO)).toBe(Player.o);
  });
});
