import React, { FunctionComponent, ReactNode } from 'react';

import ScoreBar from '@/components/ScoreBar';

const ScoreBarContainer: FunctionComponent<ScoreBarContainerProps> = ({
  children,
}: ScoreBarContainerProps) => {
  return <ScoreBar />;
};

interface ScoreBarContainerProps {
  children?: ReactNode;
}

export default ScoreBarContainer;
