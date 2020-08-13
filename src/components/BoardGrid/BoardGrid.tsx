import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { GridBlockType } from '@/store/types';

import GridBlock from '@/components/GridBlock';

import './BoardGrid.scss';

const BoardGrid: FunctionComponent<BoardGridProps> = ({
  blocks,
  onItemClick,
  locked,
  size = 'default',
}: BoardGridProps) => {
  const className = 'board-grid';

  const renderBlocks = blocks
    ? blocks.map((item: GridBlockType, index) => {
        const onItemClickHandler = () =>
          !locked && onItemClick && onItemClick(index);

        if (!item) {
          return (
            <div key={index} className={`${className}__block`}>
              <GridBlock onClick={onItemClickHandler} disabled={locked} />
            </div>
          );
        }
        return (
          <div key={index} className={`${className}__block`}>
            <GridBlock
              type={item.player}
              disabled={locked}
              win={item.win}
              small={size === 'pill'}
            />
          </div>
        );
      })
    : null;

  return (
    <div
      className={classNames(className, {
        '-size-pill': size === 'pill',
      })}
    >
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
  blocks?: GridBlockType[];
  onItemClick?: (id: number) => void;
  locked?: boolean;
  size?: 'default' | 'pill';
}

export default BoardGrid;
