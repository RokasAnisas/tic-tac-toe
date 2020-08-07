import React, { FunctionComponent } from 'react';

import MainLayout from '@/layouts/MainLayout';
import BoardGrid from '@/components/BoardGrid';

const App: FunctionComponent = () => {
  return (
    <MainLayout>
      <BoardGrid />
    </MainLayout>
  );
};

export default App;
