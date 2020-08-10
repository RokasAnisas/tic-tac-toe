import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { ConfirmDialogType, ApplicationState } from '@/store/types';
import ConfirmDialog from '@/components/ConfirmDialog';

const ConfirmDialogContainer: FunctionComponent<ConfirmDialogContainerProps> = ({
  condfirmDialog,
}: ConfirmDialogContainerProps) => {
  const { active } = condfirmDialog;
  return <ConfirmDialog active={active} />;
};

interface ConfirmDialogContainerProps {
  condfirmDialog: ConfirmDialogType;
}

const mapStateToProps = (
  state: ApplicationState
): ConfirmDialogContainerProps => {
  return {
    condfirmDialog: state.confirmDialog,
  };
};

export default connect(mapStateToProps)(ConfirmDialogContainer);
