import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { Player } from '@/constants';
import { ApplicationState } from '@/store/types';
import ScoreBar from '@/components/ScoreBar';

const ScoreBarContainer: FunctionComponent<ScoreBarContainerProps> = ({
  activePlayer,
}: ScoreBarContainerProps) => {
  return <ScoreBar activePlayer={activePlayer} />;
};

interface ScoreBarContainerProps {
  activePlayer: Player;
}

const mapStateToProps = (state: ApplicationState): ScoreBarContainerProps => {
  return {
    activePlayer: state.activePlayer,
  };
};

export default connect(mapStateToProps)(ScoreBarContainer);
