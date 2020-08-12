import React, { FunctionComponent, ReactNode } from 'react';

import './LogBoard.scss';

const LogBoard: FunctionComponent<LogBoardProps> = ({ children }: LogBoardProps) => {
  const className = "log-board";

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>LogBoard</h1>
      <div className={`${className}__body`}>{children}</div>
    </div>
  );
};

interface LogBoardProps {
  children?: ReactNode;
}

export default LogBoard;
