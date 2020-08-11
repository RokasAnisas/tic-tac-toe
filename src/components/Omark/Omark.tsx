import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Omark.scss';

const Omark: FunctionComponent<OmarkProps> = ({
  win,
  animated,
  small,
  invert,
}: OmarkProps) => {
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
              '-win': win,
              '-animated': animated,
              '-small': small,
              '-invert': invert,
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
  animated?: boolean;
  small?: boolean;
  invert?: boolean;
}

export default Omark;
