import React, { FunctionComponent } from 'react';

import { Player } from '@/constants';
import LogPill from '@/components/LogPill';

import './LogBoard.scss';

const LogBoard: FunctionComponent = () => {
  const className = 'log-board';

  return (
    <div className={className}>
      <div className={`${className}__background`}></div>
      <div className={`${className}__body`}>
        <LogPill message="made a move" player={Player.x} />
      </div>
    </div>
  );
};

export default LogBoard;
