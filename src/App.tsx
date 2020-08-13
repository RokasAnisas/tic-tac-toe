import React, { FunctionComponent, useEffect } from 'react';

import { saveProgress, checkPreviousSession } from '@/services';
import { ShowConfirmDialog } from '@/store/actions';
import { Messages } from '@/constants';

import MainLayout from '@/layouts/MainLayout';
import BoardGridContainer from '@/containers/BordGridContainer';
import ConfirmDialogContainer from '@/containers/ConfirmDialogContainer';
import ScoreBarContainer from '@/containers/ScoreBarContainer';
import LogBoardContainer from '@/containers/LogBoardContainer';

const App: FunctionComponent = () => {
  saveProgress();

  useEffect(() => {
    checkPreviousSession().then(value => {
      if (value) {
        ShowConfirmDialog({
          message: Messages.previousSession
        });
      }
    });
  });

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
