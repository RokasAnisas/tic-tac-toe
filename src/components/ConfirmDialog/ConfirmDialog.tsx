import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import Button from '@/components/Button';

import './ConfirmDialog.scss';

const ConfirmDialog: FunctionComponent<ConfirmDialogProps> = ({
  children,
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
      <div className={`${className}__body`}>{children}</div>
      <Button label="play again" onClick={onConfirm} />
    </div>
  );
};

interface ConfirmDialogProps {
  children?: ReactNode;
  active?: boolean;
  onConfirm?: () => void;
}

export default ConfirmDialog;
