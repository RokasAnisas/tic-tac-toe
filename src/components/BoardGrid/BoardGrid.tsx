import React, { FunctionComponent } from 'react';

import GridBlock from '@/components/GridBlock';

import './BoardGrid.scss';

const BoardGrid: FunctionComponent = () => {
  const className = 'board-grid';
  const itemsCount = Array.from(Array(9).keys());

  const renderBlocks = itemsCount.map((items: number, index) => {
    return (
      <div key={index} className={`${className}__item`}>
        <GridBlock />
      </div>
    );
  });

  return <div className={className}>{renderBlocks}</div>;
};

export default BoardGrid;
