import React, { FunctionComponent, ReactNode } from 'react';

import Button from '@/components/Button';

import './ConfirmDialog.scss';

const ConfirmDialog: FunctionComponent<ConfirmDialogProps> = ({
  children,
}: ConfirmDialogProps) => {
  const className = 'confirm-dialog';

  return (
    <div className={className}>
      <div className={`${className}__body`}>{children}</div>
      <Button label="play again" />
    </div>
  );
};

interface ConfirmDialogProps {
  children?: ReactNode;
}

export default ConfirmDialog;
