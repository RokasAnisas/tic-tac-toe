import React, { FunctionComponent } from 'react';

import { Player } from '@/constants/player';
import Xmark from '@/components/Xmark';
import Omark from '@/components/Omark';

import './GridBlock.scss';

const GridBlock: FunctionComponent<GridBlockProps> = ({
  type,
  onClick,
  disabled,
  win,
  small,
}: GridBlockProps) => {
  const className = 'grid-block';

  const renderMark = () => {
    if (type === Player.x) {
      return <Xmark win={win} animated />;
    }

    if (type === Player.o) {
      return <Omark win={win} animated xsmall={small} />;
    }

    return <></>;
  };

  return (
    <button onClick={onClick} className={className} disabled={disabled || !!type}>
      {renderMark()}
    </button>
  );
};

export interface GridBlockProps {
  type?: Player;
  onClick?: () => void;
  disabled?: boolean;
  win?: boolean;
  small?: boolean;
}

export default GridBlock;
