import React, { FunctionComponent, ReactNode } from 'react';

import ConfirmDialogContainer from '@/containers/ConfirmDialogContainer';
import ScoreBarContainer from '@/containers/ScoreBarContainer';

import './MainLayout.scss';

const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  const className = 'main-layout';

  return (
    <div className={className}>
      <div className={`${className}__confirm-dialog`}>
        <ConfirmDialogContainer />
      </div>
      <div className={`${className}__score-bar`}>
        <ScoreBarContainer />
      </div>
      <div className={`${className}__body`}>{children}</div>
    </div>
  );
};

interface MainLayoutProps {
  children?: ReactNode;
}

export default MainLayout;
