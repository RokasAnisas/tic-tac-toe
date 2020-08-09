import React, { FunctionComponent } from 'react';

import MainLayout from '@/layouts/MainLayout';
import BoardGridContainer from '@/containers/BordGridContainer';

const App: FunctionComponent = () => {
  return (
    <MainLayout>
      <BoardGridContainer />
    </MainLayout>
  );
};

export default App;
