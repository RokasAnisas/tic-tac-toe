import React, { FunctionComponent, ReactNode } from 'react';

import './MainLayout.scss';

const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
  confirmDialog,
  scoreBar,
  logBoard,
}: MainLayoutProps) => {
  const className = 'main-layout';

  return (
    <div className={className}>
      <div className={`${className}__confirm-dialog`}>{confirmDialog}</div>
      <div className={`${className}__score-bar`}>{scoreBar}</div>
      <div className={`${className}__body`}>{children}</div>
      <div className={`${className}__log-board`}>{logBoard}</div>
    </div>
  );
};

interface MainLayoutProps {
  children?: ReactNode;
  confirmDialog?: ReactNode;
  scoreBar?: ReactNode;
  logBoard?: ReactNode;
}

export default MainLayout;
