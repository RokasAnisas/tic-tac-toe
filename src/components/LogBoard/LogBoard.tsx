import React, { FunctionComponent, createRef } from 'react';

import { LogItem } from '@/store/types';
import LogPill from '@/components/LogPill';

import './LogBoard.scss';

const LogBoard: FunctionComponent<LogBoardProps> = ({
  actionLog,
}: LogBoardProps) => {
  const className = 'log-board';
  const bodyRef = createRef<HTMLDivElement>();

  const scrollToTop = () => {
    bodyRef.current?.scrollTo(0, 0);
  };

  const renderLogPills = actionLog.map((item, index) => {
    return (
      <div key={index} className={`${className}__pill`}>
        <LogPill
          message={item.message}
          player={item.player}
          accent={item.accent}
          gridSnapshot={item.gridSnapshot}
        />
      </div>
    );
  });

  return (
    <div className={className} onMouseLeave={scrollToTop}>
      <div className={`${className}__background`}></div>
      <div className={`${className}__body`} ref={bodyRef}>
        {renderLogPills.reverse()}
      </div>
    </div>
  );
};

interface LogBoardProps {
  actionLog: LogItem[];
}

export default LogBoard;
