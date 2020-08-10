import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { checkWinner, checkTie } from '@/utils';
import {
  UpdateGrid,
  SetActivePlayer,
  ResetGrid,
  ShowConfirmDialog,
} from '@/store/actions';
import { ApplicationState } from '@/store/types';
import BoardGrid from '@/components/BoardGrid';
import { Player } from '@/constants';

const BoardGridContainer: FunctionComponent = () => {
  const activePlayer = useSelector(
    (state: ApplicationState) => state.activePlayer
  );
  const grid = useSelector((state: ApplicationState) => state.grid);

  const onItemClick = (id: number) => {
    UpdateGrid({
      id: id,
      content: {
        active: true,
        player: activePlayer,
      },
    });

    toggleActivePlayer();
  };

  const toggleActivePlayer = (): void => {
    const nextPlayer = activePlayer === Player.o ? Player.x : Player.o;
    SetActivePlayer(nextPlayer);
  };

  useEffect(() => {
    const winner = checkWinner(grid);
    const tie = checkTie(grid);

    if (winner) {
      ShowConfirmDialog({
        message: `${winner} Wins!`,
        action: () => ResetGrid(),
      });
    }
    if (tie) {
      // ResetGrid();
      ShowConfirmDialog({
        message: `${winner} Wins!`,
        action: () => ResetGrid(),
      });
    }
  }, [grid]);

  return <BoardGrid blocks={grid} onItemClick={onItemClick} />;
};

export default BoardGridContainer;
