import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { checkWinner } from '@/utils';
import { UpdateGrid, SetActivePlayer } from '@/store/actions';
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

    console.log(winner);
  }, [grid]);

  return <BoardGrid blocks={grid} onItemClick={onItemClick} />;
};

export default BoardGridContainer;
