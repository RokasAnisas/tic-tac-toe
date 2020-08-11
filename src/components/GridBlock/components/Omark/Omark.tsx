import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Omark.scss';

const Omark: FunctionComponent<OmarkProps> = ({ win }: OmarkProps) => {
  const className = 'o-mark';

  return (
    <div className={className}>
      <svg
        className={`${className}__svg`}
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <g>
          <circle
            className={classNames(`${className}__elipse`, {
              '-win': win
            })}
            cx="50"
            cy="50"
            r="50"
          />
        </g>
      </svg>
    </div>
  );
};

interface OmarkProps {
  win?: boolean;
}

export default Omark;
