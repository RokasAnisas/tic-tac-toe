import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '@/store/types';
import BoardGrid from '@/components/BoardGrid';

const BoardGridContainer: FunctionComponent = () => {
  const grid = useSelector((state: ApplicationState) => state.grid);

  return (
    <BoardGrid blocks={grid} />
  );
};

export default BoardGridContainer;
