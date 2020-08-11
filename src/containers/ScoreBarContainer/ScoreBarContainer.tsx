import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { Player } from '@/constants';
import { ApplicationState, Score } from '@/store/types';
import ScoreBar from '@/components/ScoreBar';

const ScoreBarContainer: FunctionComponent<ScoreBarContainerProps> = ({
  activePlayer,
  score,
}: ScoreBarContainerProps) => {
  return <ScoreBar activePlayer={activePlayer} x={score.x} o={score.o} />;
};

interface ScoreBarContainerProps {
  activePlayer: Player;
  score: Score;
}

const mapStateToProps = (state: ApplicationState): ScoreBarContainerProps => {
  return {
    activePlayer: state.activePlayer,
    score: state.score,
  };
};

export default connect(mapStateToProps)(ScoreBarContainer);
