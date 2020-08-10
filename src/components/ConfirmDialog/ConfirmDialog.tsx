import React, { FunctionComponent, ReactNode } from 'react';

import './ConfirmDialog.scss';

const ConfirmDialog: FunctionComponent<ConfirmDialogProps> = ({
  children,
}: ConfirmDialogProps) => {
  const className = 'confirm-dialog';

  return (
    <div className={className}>
      <div className={`${className}__body`}>{children}</div>
      <button className={`${className}__action`}>Play again</button>
    </div>
  );
};

interface ConfirmDialogProps {
  children?: ReactNode;
}

export default ConfirmDialog;
