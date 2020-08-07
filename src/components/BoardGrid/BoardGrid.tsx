import React, { FunctionComponent } from 'react';

import './BoardGrid.scss';

const BoardGrid: FunctionComponent = () => {
  const className = 'board-grid';
  const itemsCount = Array.from(Array(9).keys());

  const renderBlocks = itemsCount.map((block: number, index) => {
    return <div key={index} className={`${className}__item`} />;
  });

  return <div className={className}>{renderBlocks}</div>;
};

export default BoardGrid;
