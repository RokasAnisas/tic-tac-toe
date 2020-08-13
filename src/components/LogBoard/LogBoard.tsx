import React, { FunctionComponent } from 'react';

import { LogItem } from '@/store/types';
import LogPill from '@/components/LogPill';

import './LogBoard.scss';

const LogBoard: FunctionComponent<LogBoardProps> = ({
  actionLog,
}: LogBoardProps) => {
  const className = 'log-board';

  const renderLogPills = actionLog.reverse().map((item, index) => {
    return (
      <div key={index} className={`${className}__pill`}>
        <LogPill message={item.message} player={item.player} />
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

interface LogBoardProps {
  actionLog: LogItem[];
}

export default LogBoard;
