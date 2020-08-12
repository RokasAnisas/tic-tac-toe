import React, { FunctionComponent } from 'react';

import MainLayout from '@/layouts/MainLayout';
import BoardGridContainer from '@/containers/BordGridContainer';
import ConfirmDialogContainer from '@/containers/ConfirmDialogContainer';
import ScoreBarContainer from '@/containers/ScoreBarContainer';
import LogBoardContainer from '@/containers/LogBoardContainer';

const App: FunctionComponent = () => {
  return (
    <MainLayout
      confirmDialog={<ConfirmDialogContainer />}
      scoreBar={<ScoreBarContainer />}
      logBoard={<LogBoardContainer />}
    >
      <BoardGridContainer />
    </MainLayout>
  );
};

export default App;
