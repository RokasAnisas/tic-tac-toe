import store from './store';
import { Player } from '@/constants';
import { ActionTypes, GridBlockType, ConfirmDialogPayload } from './types';

export const SetActivePlayer = (payload: Player): void => {
  store.dispatch({ type: ActionTypes.setActivePlayer, payload: payload });
};

export const UpdateGridItem = (payload: {
  content: GridBlockType;
  id: number;
}): void => {
  store.dispatch({ type: ActionTypes.UpdateGridItem, payload: payload });
};

export const ResetGrid = (): void => {
  store.dispatch({ type: ActionTypes.resetGrid });
};

export const ShowConfirmDialog = (payload: ConfirmDialogPayload): void => {
  store.dispatch({ type: ActionTypes.showConfirmDialog, payload: payload });
};

export const HideConfirmDialog = (): void => {
  store.dispatch({ type: ActionTypes.hideConfirmDialog });
};

export const SetGridLock = (payload: boolean): void => {
  store.dispatch({ type: ActionTypes.setGridLock, payload: payload });
};
