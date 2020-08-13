import React, { FunctionComponent } from 'react';

import { Player } from '@/constants';
import LogPill from '@/components/LogPill';

import './LogBoard.scss';

const LogBoard: FunctionComponent = () => {
  const className = 'log-board';
  const pills = [1];

  const renderLogPills = pills.map((item, index) => {
    return (
      <div key={index} className={`${className}__pill`}>
        <LogPill message="made a move" player={Player.x} />
      </div>
    );
  });

  return (
    <div className={className}>
      <div className={`${className}__background`}></div>
      <div className={`${className}__body`}>{renderLogPills}</div>
    </div>
  );
};

export default LogBoard;
