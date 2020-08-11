import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Player } from '@/constants';
import Xmark from '@/components/Xmark';
import Omark from '@/components/Omark';

import './ScorePill.scss';

const ScorePill: FunctionComponent<ScorePillProps> = ({
  player,
  active,
}: ScorePillProps) => {
  const className = 'score-pill';

  return (
    <div
      className={classNames(className, {
        'is-active': active,
      })}
    >
      <div className={`${className}__mark-container`}>
        {player === Player.x && <Xmark invert={active} />}
        {player === Player.o && <Omark invert={active} small />}
      </div>
      <span
        className={classNames(`${className}__score`, {
          'is-active': active,
        })}
      >
        0
      </span>
    </div>
  );
};

interface ScorePillProps {
  player: Player;
  active?: boolean;
}

export default ScorePill;
