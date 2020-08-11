import React, { FunctionComponent } from 'react';

import { Player } from '@/constants';
import Xmark from '@/components/Xmark';
import Omark from '@/components/Omark';

import './ScorePill.scss';

const ScorePill: FunctionComponent<ScorePillProps> = ({
  player,
}: ScorePillProps) => {
  const className = 'score-pill';

  return (
    <div className={className}>
      <div className={`${className}__mark-container`}>
        {player === Player.x && <Xmark />}
        {player === Player.o && <Omark small />}
      </div>
      <span className={`${className}__score`}>0</span>
    </div>
  );
};

interface ScorePillProps {
  player: Player;
}

export default ScorePill;
