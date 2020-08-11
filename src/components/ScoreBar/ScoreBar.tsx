import React, { FunctionComponent, ReactNode } from 'react';

import { Player } from '@/constants';
import ScorePill from '@/components/ScorePill';

import './ScoreBar.scss';

const ScoreBar: FunctionComponent<ScoreBarProps> = ({
  children,
}: ScoreBarProps) => {
  const className = 'score-bar';

  return (
    <div className={className}>
      <div className={`${className}__pill-container`}>
        <ScorePill player={Player.x} active />
      </div>
      <div className={`${className}__pill-container`}>
        <ScorePill player={Player.o} />
      </div>
    </div>
  );
};

interface ScoreBarProps {
  children?: ReactNode;
}

export default ScoreBar;
