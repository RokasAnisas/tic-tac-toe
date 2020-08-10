import React, { FunctionComponent } from 'react';

import { Player } from '@/constants/player';
import Xmark from './components/Xmark';
import Omark from './components/Omark';

import './GridBlock.scss';

const GridBlock: FunctionComponent<GridBlockProps> = ({
  type,
  onClick,
  disabled,
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
    <button onClick={onClick} className={className} disabled={disabled}>
      {renderMark()}
    </button>
  );
};

export interface GridBlockProps {
  type?: Player;
  onClick?: () => void;
  disabled?: boolean;
}

export default GridBlock;
