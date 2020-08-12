import React, { FunctionComponent } from 'react';

import './LogBoard.scss';

const LogBoard: FunctionComponent = () => {
  const className = "log-board";

  return (
    <div className={className}>
      <div className={`${className}__background`}></div>
      <div className={`${className}__body`}>
        <h1 className={`${className}__title`}>LogBoard</h1>
      </div>
    </div>
  );
};

export default LogBoard;
