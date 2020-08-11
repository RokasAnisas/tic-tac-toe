import React, { FunctionComponent, ReactNode } from 'react';

import { Player } from '@/constants';
import ScoreBar from '@/components/ScoreBar';

const ScoreBarContainer: FunctionComponent<ScoreBarContainerProps> = ({
  children,
}: ScoreBarContainerProps) => {
  return <ScoreBar activePlayer={Player.x} />;
};

interface ScoreBarContainerProps {
  children?: ReactNode;
}

export default ScoreBarContainer;
