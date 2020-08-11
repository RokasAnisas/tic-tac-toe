import React, { FunctionComponent, ReactNode } from 'react';

import './ScorePill.scss';

const ScorePill: FunctionComponent<ScorePillProps> = ({
  children,
}: ScorePillProps) => {
  const className = 'score-pill';

  return (
    <div className={className}>
      <h3 className={`${className}__title`}>ScorePill</h3>
      <div className={`${className}__body`}>{children}</div>
    </div>
  );
};

interface ScorePillProps {
  children?: ReactNode;
}

export default ScorePill;
