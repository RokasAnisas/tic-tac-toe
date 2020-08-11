import React, { FunctionComponent } from 'react';

import { Player } from '@/constants';
import ScorePill from '@/components/ScorePill';

import './ScoreBar.scss';

const ScoreBar: FunctionComponent<ScoreBarProps> = ({
  activePlayer,
  x,
  o,
}: ScoreBarProps) => {
  const className = 'score-bar';

  return (
    <div className={className}>
      <div className={`${className}__pill-container`}>
        <ScorePill
          player={Player.x}
          active={activePlayer === Player.x}
          score={x}
        />
      </div>
      <div className={`${className}__pill-container`}>
        <ScorePill
          player={Player.o}
          active={activePlayer === Player.o}
          score={o}
        />
      </div>
    </div>
  );
};

interface ScoreBarProps {
  activePlayer: Player;
  x: number;
  o: number;
}

export default ScoreBar;
