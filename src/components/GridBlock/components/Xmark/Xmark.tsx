import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Xmark.scss';

const Xmark: FunctionComponent<XmarkProps> = ({ win }: XmarkProps) => {
  const className = 'x-mark';

  return (
    <div className={className}>
      <div className={`${className}__line-container -a`}>
        <div
          className={classNames(`${className}__line`, {
            '-win': win,
          })}
        />
      </div>
      <div className={`${className}__line-container -b`}>
        <div
          className={classNames(`${className}__line`, {
            '-win': win,
          })}
        />
      </div>
    </div>
  );
};

interface XmarkProps {
  win?: boolean;
}

export default Xmark;
