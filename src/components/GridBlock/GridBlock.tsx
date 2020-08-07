import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './GridBlock.scss';

const GridBlock: FunctionComponent<GridBlockProps> = ({
  type = 'x',
}: GridBlockProps) => {
  const className = 'grid-block';

  return (
    <button
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
}

export default GridBlock;
