import React, { FunctionComponent } from 'react';

import './Omark.scss';

const Omark: FunctionComponent = () => {
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
            className={`${className}__elipse`}
            cx="50"
            cy="50"
            r="50"
            strokeWidth={1.5}
          />
        </g>
      </svg>
    </div>
  );
};

export default Omark;
