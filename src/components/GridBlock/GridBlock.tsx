import React, { FunctionComponent } from 'react';

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
    <button onClick={onClick} className={className}>
      {renderMark()}
    </button>
  );
};

export interface GridBlockProps {
  type?: Player;
  onClick?: () => void;
}

export default GridBlock;
