import React, { FunctionComponent } from 'react';

import './Xmark.scss';

const Xmark: FunctionComponent = () => {
  const className = 'x-mark';

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>x</h1>
    </div>
  );
};

export default Xmark;
