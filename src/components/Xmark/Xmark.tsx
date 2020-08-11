import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Xmark.scss';

const Xmark: FunctionComponent<XmarkProps> = ({
  win,
  animated,
  invert,
}: XmarkProps) => {
  const className = 'x-mark';

  return (
    <div className={className}>
      <div className={`${className}__line-container -a`}>
        <div
          className={classNames(`${className}__line`, {
            '-win': win,
            '-animated': animated,
            '-invert': invert,
          })}
        />
      </div>
      <div className={`${className}__line-container -b`}>
        <div
          className={classNames(`${className}__line`, {
            '-win': win,
            '-animated': animated,
            '-invert': invert,
          })}
        />
      </div>
    </div>
  );
};

interface XmarkProps {
  win?: boolean;
  animated?: boolean;
  invert?: boolean;
}

export default Xmark;
