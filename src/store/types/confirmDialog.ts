export interface ConfirmDialogType extends ConfirmDialogPayload {
  active: boolean;
}

export interface ConfirmDialogPayload {
  message?: string;
  actionText: string;
  action?: () => void;
}
