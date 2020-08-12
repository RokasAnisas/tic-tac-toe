import React, { FunctionComponent } from 'react';

import './LogPill.scss';

const LogPill: FunctionComponent<LogPillProps> = ({
  message,
}: LogPillProps) => {
  const className = 'log-pill';

  return (
    <div className={className}>
      <div className={`${className}__body`}>{message}</div>
    </div>
  );
};

interface LogPillProps {
  message?: string;
}

export default LogPill;
