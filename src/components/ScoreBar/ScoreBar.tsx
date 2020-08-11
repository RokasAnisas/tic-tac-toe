import React, { FunctionComponent, ReactNode } from 'react';

import ScorePill from '@/components/ScorePill';

import './ScoreBar.scss';

const ScoreBar: FunctionComponent<ScoreBarProps> = ({
  children,
}: ScoreBarProps) => {
  const className = 'score-bar';

  return (
    <div className={className}>
      <div className={`${className}__pill-container`}>
        <ScorePill />
      </div>
      <div className={`${className}__pill-container`}>
        <ScorePill />
      </div>
    </div>
  );
};

interface ScoreBarProps {
  children?: ReactNode;
}

export default ScoreBar;
