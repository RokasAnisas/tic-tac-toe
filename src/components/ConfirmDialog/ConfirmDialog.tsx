import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Button from '@/components/Button';

import './ConfirmDialog.scss';

const ConfirmDialog: FunctionComponent<ConfirmDialogProps> = ({
  message,
  active,
  actionText,
  onConfirm,
}: ConfirmDialogProps) => {
  const className = 'confirm-dialog';

  return (
    <div
      className={classNames(className, {
        'is-active': active,
      })}
    >
      <span className={`${className}__message`}>{message}</span>
      <Button label={actionText} onClick={onConfirm} />
    </div>
  );
};

interface ConfirmDialogProps {
  message?: string;
  active?: boolean;
  actionText: string;
  onConfirm?: () => void;
}

export default ConfirmDialog;
