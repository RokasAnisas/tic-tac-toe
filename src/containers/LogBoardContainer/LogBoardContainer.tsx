import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { ApplicationState, LogItem } from '@/store/types';
import LogBoard from '@/components/LogBoard';

const LogBoardContainer: FunctionComponent<LogBoardContainerProps> = ({
  actionLog,
}: LogBoardContainerProps) => {
  return <LogBoard actionLog={actionLog} />;
};

interface LogBoardContainerProps {
  actionLog: LogItem[];
}

const mapStateToProps = (state: ApplicationState): LogBoardContainerProps => {
  return {
    actionLog: state.actionLog,
  };
};

export default connect(mapStateToProps)(LogBoardContainer);
