import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Player } from '@/constants/player';

import './GridBlock.scss';

const GridBlock: FunctionComponent<GridBlockProps> = ({
  type,
  onClick,
}: GridBlockProps) => {
  const className = 'grid-block';

  return (
    <button
      onClick={onClick}
      className={classNames(className, {
        '-x': type === Player.x,
        '-o': type === Player.o,
      })}
    >
      {type}
    </button>
  );
};

interface GridBlockProps {
  type?: Player;
  onClick?: () => void;
}

export default GridBlock;
