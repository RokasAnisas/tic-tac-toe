import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Button from '@/components/Button';

import './ConfirmDialog.scss';

const ConfirmDialog: FunctionComponent<ConfirmDialogProps> = ({
  message,
  active,
  onConfirm,
}: ConfirmDialogProps) => {
  const className = 'confirm-dialog';

  return (
    <div
      className={classNames(className, {
        'is-active': active,
      })}
    >
      <div className={`${className}__body`}>{message}</div>
      <Button label="play again" onClick={onConfirm} />
    </div>
  );
};

interface ConfirmDialogProps {
  message?: string;
  active?: boolean;
  onConfirm?: () => void;
}

export default ConfirmDialog;
