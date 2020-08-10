import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import Button from '@/components/Button';

import './ConfirmDialog.scss';

const ConfirmDialog: FunctionComponent<ConfirmDialogProps> = ({
  children,
  active
}: ConfirmDialogProps) => {
  const className = 'confirm-dialog';

  return (
    <div
      className={classNames(className, {
        'is-active': active,
      })}
    >
      <div className={`${className}__body`}>{children}</div>
      <Button label="play again" />
    </div>
  );
};

interface ConfirmDialogProps {
  children?: ReactNode;
  active?: boolean;
}

export default ConfirmDialog;
