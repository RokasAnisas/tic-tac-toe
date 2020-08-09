import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './GridBlock.scss';

const GridBlock: FunctionComponent<GridBlockProps> = ({
  type,
  onClick
}: GridBlockProps) => {
  const className = 'grid-block';

  return (
    <button
      onClick={onClick}
      className={classNames(className, {
        '-x': type === 'x',
        '-o': type === 'o',
      })}
    >
      {type}
    </button>
  );
};

interface GridBlockProps {
  type?: 'x' | 'o';
  onClick?: () => void;
}

export default GridBlock;
