import React, { FunctionComponent } from 'react';

import './Xmark.scss';

const Xmark: FunctionComponent = () => {
  const className = 'x-mark';

  return (
    <div className={className}>
      <div className={`${className}__cross -a`} />
      <div className={`${className}__cross -b`} />
    </div>
  );
};

export default Xmark;
