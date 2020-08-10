export interface ConfirmDialogType extends ConfirmDialogPayload {
  active: boolean;
}

export interface ConfirmDialogPayload {
  message?: string;
  action?: () => void;
}
