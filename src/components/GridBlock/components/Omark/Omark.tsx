import React, { FunctionComponent } from 'react';

import './Omark.scss';

const Omark: FunctionComponent = () => {
  const className = 'o-mark';

  return (
    <div className={className}>
      <div className={`${className}__circle`} />
    </div>
  );
};

export default Omark;
