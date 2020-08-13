import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Player } from '@/constants';
import Xmark from '@/components/Xmark';
import Omark from '@/components/Omark';
import BoardGrid from '@/components/BoardGrid';
import { GridBlockType } from '@/store/types';

import './LogPill.scss';

const LogPill: FunctionComponent<LogPillProps> = ({
  message,
  player,
  accent,
  gridSnapshot,
}: LogPillProps) => {
  const className = 'log-pill';

  return (
    <div
      className={classNames(className, {
        '-accent': accent,
      })}
    >
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
        {gridSnapshot && <BoardGrid blocks={gridSnapshot} locked size="pill" />}
      </div>
    </div>
  );
};

interface LogPillProps {
  message?: string;
  player?: Player;
  accent?: boolean;
  gridSnapshot?: GridBlockType[];
}

export default LogPill;
