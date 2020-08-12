import React, { FunctionComponent, ReactNode } from 'react';

import './LogPill.scss';

const LogPill: FunctionComponent<LogPillProps> = ({ children }: LogPillProps) => {
  const className = "log-pill";

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>LogPill</h1>
      <div className={`${className}__body`}>{children}</div>
    </div>
  );
};

interface LogPillProps {
  children?: ReactNode;
}

export default LogPill;
