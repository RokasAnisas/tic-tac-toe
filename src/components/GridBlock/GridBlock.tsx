import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './GridBlock.scss';

const GridBlock: FunctionComponent<GridBlockProps> = ({
  type,
}: GridBlockProps) => {
  const className = 'grid-block';

  return (
    <div className={classNames(className, {
      '-x': type === 'x',
      '-o': type === 'o',
    })}>
      <h1 className={`${className}__title`}>GridBlock</h1>
    </div>
  );
};

interface GridBlockProps {
  type: 'x' | 'o';
}

export default GridBlock;
