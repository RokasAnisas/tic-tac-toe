import React, { FunctionComponent } from 'react';

import LogPill from '@/components/LogPill';

import './LogBoard.scss';

const LogBoard: FunctionComponent = () => {
  const className = "log-board";

  return (
    <div className={className}>
      <div className={`${className}__background`}></div>
      <div className={`${className}__body`}>
        <LogPill />
      </div>
    </div>
  );
};

export default LogBoard;
