import React, { FunctionComponent } from 'react';

import { GridBlockType } from '@/store/types';

import GridBlock from '@/components/GridBlock';

import './BoardGrid.scss';

const BoardGrid: FunctionComponent<BoardGridProps> = ({
  blocks,
  onItemClick,
}: BoardGridProps) => {
  const className = 'board-grid';

  const renderBlocks = blocks.map((item: GridBlockType, index) => {
    if (!item) {
      return (
        <div key={index} className={`${className}__block`}>
          <GridBlock onClick={() => onItemClick(index)} />
        </div>
      );
    }
    return (
      <div key={index} className={`${className}__block`}>
        <GridBlock type={item.player} />
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
  blocks: GridBlockType[];
  onItemClick: (id: number) => void;
}

export default BoardGrid;
