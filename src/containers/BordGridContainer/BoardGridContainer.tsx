import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import { UpdateGrid } from '@/store/actions';
import { ApplicationState } from '@/store/types';
import BoardGrid from '@/components/BoardGrid';

const BoardGridContainer: FunctionComponent = () => {
  const activePlayer = useSelector((state: ApplicationState) => state.activePlayer);
  const grid = useSelector((state: ApplicationState) => state.grid);

  const onItemClick = (id: number) => {
    UpdateGrid({
      id: id,
      content: {
        active: true,
        player: activePlayer,
      },
    });
  };

  return <BoardGrid blocks={grid} onItemClick={onItemClick} />;
};

export default BoardGridContainer;
