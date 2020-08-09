import React, { FunctionComponent } from 'react';

import { GridBlock } from '@/store/types';

import { default as GridBlockComponent } from '@/components/GridBlock';

import './BoardGrid.scss';

const BoardGrid: FunctionComponent<BoardGridProps> = ({
  blocks,
}: BoardGridProps) => {
  const className = 'board-grid';

  const renderBlocks = blocks.map((item: GridBlock, index) => {
    return (
      <div key={index} className={`${className}__block`}>
        <GridBlockComponent />
      </div>
    );
  });

  return (
    <div className={className}>
      <div className={`${className}__lines`}>
        <div className={`${className}__lines-horizontal`}>
          <div className={`${className}__line -horizontal`} />
          <div className={`${className}__line -horizontal`} />
        </div>
        <div className={`${className}__lines-vertical`}>
          <div className={`${className}__line -vertical`} />
          <div className={`${className}__line -vertical`} />
        </div>
      </div>
      <div className={`${className}__blocks-container`}>{renderBlocks}</div>
    </div>
  );
};

interface BoardGridProps {
  blocks: GridBlock[];
}

export default BoardGrid;
