import React, { FunctionComponent } from 'react';

import './LogPill.scss';

const LogPill: FunctionComponent<LogPillProps> = ({
  message,
}: LogPillProps) => {
  const className = 'log-pill';

  return (
    <div className={className}>
      <span className={`${className}__message`}>{message}</span>
    </div>
  );
};

interface LogPillProps {
  message?: string;
}

export default LogPill;
