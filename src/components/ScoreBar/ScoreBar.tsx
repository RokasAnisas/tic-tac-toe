import React, { FunctionComponent, ReactNode } from 'react';

import './ScoreBar.scss';

const ScoreBar: FunctionComponent<ScoreBarProps> = ({ children }: ScoreBarProps) => {
  const className = "score-bar";

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>ScoreBar</h1>
      <div className={`${className}__body`}>{children}</div>
    </div>
  );
};

interface ScoreBarProps {
  children?: ReactNode;
}

export default ScoreBar;
