import React, { FunctionComponent } from 'react';

import { Player } from '@/constants';
import Xmark from '@/components/Xmark';
import Omark from '@/components/Omark';
import BoardGrid from '@/components/BoardGrid';

import './LogPill.scss';

const LogPill: FunctionComponent<LogPillProps> = ({
  message,
  player,
}: LogPillProps) => {
  const className = 'log-pill';

  return (
    <div className={className}>
      <div className={`${className}__message-container`}>
        {player && (
          <div className={`${className}__player-mark`}>
            {player === Player.x && <Xmark />}
            {player === Player.o && <Omark small />}
          </div>
        )}
        <span className={`${className}__message`}>{message}</span>
      </div>
      <div className={`${className}__board-container`}>
        <BoardGrid locked size="pill" />
      </div>
    </div>
  );
};

interface LogPillProps {
  message?: string;
  player?: Player;
}

export default LogPill;
