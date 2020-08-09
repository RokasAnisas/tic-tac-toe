import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Player } from '@/constants/player';
import Xmark from './components/Xmark';
import Omark from './components/Omark';

import './GridBlock.scss';

const GridBlock: FunctionComponent<GridBlockProps> = ({
  type,
  onClick,
}: GridBlockProps) => {
  const className = 'grid-block';

  const renderMark = () => {
    if (type === Player.x) {
      return <Xmark />;
    }

    if (type === Player.o) {
      return <Omark />;
    }

    return <></>;
  };

  return (
    <button
      onClick={onClick}
      className={classNames(className, {
        '-x': type === Player.x,
        '-o': type === Player.o,
      })}
    >
      {renderMark()}
    </button>
  );
};

interface GridBlockProps {
  type?: Player;
  onClick?: () => void;
}

export default GridBlock;
