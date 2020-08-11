import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { checkWinner, checkTie } from '@/utils';
import {
  UpdateGridItem,
  SetActivePlayer,
  ResetGrid,
  ShowConfirmDialog,
  SetGridLock,
} from '@/store/actions';
import { ApplicationState } from '@/store/types';
import BoardGrid from '@/components/BoardGrid';
import { Player, Messages } from '@/constants';

const BoardGridContainer: FunctionComponent = () => {
  const activePlayer = useSelector(
    (state: ApplicationState) => state.activePlayer
  );
  const grid = useSelector((state: ApplicationState) => state.grid);
  const gridLock = useSelector((state: ApplicationState) => state.gridLock);

  const onItemClick = (id: number) => {
    UpdateGridItem({
      id: id,
      content: {
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

    if (winner || tie) {
      const message = winner ? `${winner.toUpperCase()} ${Messages.win}` : Messages.tie;
      const onDialogConfirm = () => {
        ResetGrid();
        SetGridLock(false);
      };

      SetGridLock(true);
      ShowConfirmDialog({
        message: message,
        action: onDialogConfirm,
      });
    }
  }, [grid]);

  return (
    <BoardGrid blocks={grid} onItemClick={onItemClick} locked={gridLock} />
  );
};

export default BoardGridContainer;
