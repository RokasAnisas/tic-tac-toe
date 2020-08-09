import React, { FunctionComponent } from 'react';

import GridBlock from '@/components/GridBlock';

import './BoardGrid.scss';

const BoardGrid: FunctionComponent = () => {
  const className = 'board-grid';
  const itemsCount = Array.from(Array(9).keys());

  const renderBlocks = itemsCount.map((items: number, index) => {
    return (
      <div key={index} className={`${className}__block`}>
        <GridBlock />
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
      <div className={`${className}__blocks-container`}>
        {renderBlocks}
      </div>
    </div>
  );
};

export default BoardGrid;
