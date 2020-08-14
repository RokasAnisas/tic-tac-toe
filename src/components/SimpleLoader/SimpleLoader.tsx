import React, { FunctionComponent } from 'react';

import './SimpleLoader.scss';

const SimpleLoader: FunctionComponent = () => {
  const className = 'simple-loader';

  return (
    <div className={className}>
      <div className={`${className}__block`} />
      <div className={`${className}__block`} />
      <div className={`${className}__block`} />
    </div>
  );
};

export default SimpleLoader;
