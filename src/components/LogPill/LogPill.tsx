import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

import { Player } from '@/constants';
import Xmark from '@/components/Xmark';
import Omark from '@/components/Omark';
import BoardGrid from '@/components/BoardGrid';
import { GridBlockType } from '@/store/types';

import './LogPill.scss';

const LogPill: FunctionComponent<LogPillProps> = ({
  message,
  player,
  accent,
  gridSnapshot,
}: LogPillProps) => {
  const className = 'log-pill';
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const onVisibilityChange = (val: boolean) => {
    setIsVisible(val);
  };

  const RenderContent: FunctionComponent = () => (
    <>
      <div className={`${className}__message-container`}>
        {player && (
          <div className={`${className}__player-mark`}>
            {player === Player.x && <Xmark invert={accent} />}
            {player === Player.o && <Omark invert={accent} small />}
          </div>
        )}
        <span className={`${className}__message`}>{message}</span>
      </div>
      <div className={`${className}__board-container`}>
        {gridSnapshot && <BoardGrid blocks={gridSnapshot} locked size="pill" />}
      </div>
    </>
  );

  return (
    <VisibilitySensor onChange={onVisibilityChange}>
      <div
      className={classNames(className, {
        '-accent': accent,
      })}
    >
      {isVisible ? <RenderContent /> : <></>}
      </div>
    </VisibilitySensor>
  );
};

interface LogPillProps {
  message?: string;
  player?: Player;
  accent?: boolean;
  gridSnapshot?: GridBlockType[];
}

export default LogPill;
