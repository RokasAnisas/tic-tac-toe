import React, { FunctionComponent, ReactNode } from 'react';

import './ConfirmDialog.scss';

const ConfirmDialog: FunctionComponent<ConfirmDialogProps> = ({
  children,
}: ConfirmDialogProps) => {
  const className = 'confirm-dialog';

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>ConfirmDialog</h1>
      <div className={`${className}__body`}>{children}</div>
    </div>
  );
};

interface ConfirmDialogProps {
  children?: ReactNode;
}

export default ConfirmDialog;
