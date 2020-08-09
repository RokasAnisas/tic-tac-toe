import React, { FunctionComponent } from 'react';

import './Omark.scss';

const Omark: FunctionComponent = () => {
  const className = 'o-mark';

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>o</h1>
    </div>
  );
};

export default Omark;
