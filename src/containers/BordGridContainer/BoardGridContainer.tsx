import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { checkWinner, checkTie } from '@/utils';
import {
  UpdateGridItem,
  SetActivePlayer,
  ResetGrid,
  ShowConfirmDialog,
  SetGridLock,
  BumpScore,
  AddLog,
} from '@/store/actions';
import { ApplicationState, GridBlockType } from '@/store/types';
import BoardGrid from '@/components/BoardGrid';
import { Player, Messages } from '@/constants';

const BoardGridContainer: FunctionComponent = () => {
  const activePlayer = useSelector(
    (state: ApplicationState) => state.activePlayer
  );
  const grid = useSelector((state: ApplicationState) => state.grid);
  const gridLock = useSelector((state: ApplicationState) => state.gridLock);

  const onItemClick = (id: number) => {
    const gridClone = grid.map((item: GridBlockType, index) => {
      if (id === index) {
        const winItem: GridBlockType = {
          player: activePlayer,
          win: true,
        };
        return winItem;
      }
      return item;
    });
    UpdateGridItem({
      id: id,
      content: {
        player: activePlayer,
      },
    });

    AddLog({
      message: Messages.moved,
      player: activePlayer,
      gridSnapshot: gridClone,
    });

    toggleActivePlayer();
  };

  const toggleActivePlayer = (): void => {
    const nextPlayer = activePlayer === Player.o ? Player.x : Player.o;
    SetActivePlayer(nextPlayer);
  };

  const highlightWinningRow = (winCombo: number[]) => {
    winCombo.forEach(winIndex => {
      UpdateGridItem({
        id: winIndex,
        content: {
          player: grid[winIndex]!.player,
          win: true,
        },
      });
    });
  };

  useEffect(() => {
    const winner = checkWinner(grid);
    const tie = checkTie(grid);

    if (winner || tie) {
      const message = winner
        ? `${winner.player!.toUpperCase()} ${Messages.win}`
        : Messages.tie;
      const onDialogConfirm = () => {
        ResetGrid();
        SetGridLock(false);
        AddLog({
          message: Messages.newGame,
          accent: true,
        });
      };

      SetGridLock(true);
      ShowConfirmDialog({
        message: message,
        action: onDialogConfirm,
      });
    }
  }, [grid]);

  useEffect(() => {
    const winner = checkWinner(grid);
    const tie = checkTie(grid);

    if (winner) {
      BumpScore(winner.player!);
      highlightWinningRow(winner.combination);
      AddLog({
        message: Messages.win,
        player: winner.player!,
        accent: true,
      });
    }

    if (tie) {
      AddLog({
        message: Messages.tie,
        accent: true,
      });
    }
  }, [gridLock]);

  return (
    <BoardGrid blocks={grid} onItemClick={onItemClick} locked={gridLock} />
  );
};

export default BoardGridContainer;
