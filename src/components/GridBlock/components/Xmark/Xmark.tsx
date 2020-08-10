import React, { FunctionComponent } from 'react';

import './Xmark.scss';

const Xmark: FunctionComponent = () => {
  const className = 'x-mark';

  return (
    <div className={className}>
      <div className={`${className}__line-container -a`}>
        <div className={`${className}__line`} />
      </div>
      <div className={`${className}__line-container -b`}>
        <div className={`${className}__line`} />
      </div>
    </div>
  );
};

export default Xmark;
