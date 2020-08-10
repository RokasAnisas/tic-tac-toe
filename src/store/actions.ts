import store from './store';
import { Player } from '@/constants';
import { ActionTypes, GridBlockType, ConfirmDialogType } from './types';

export const SetActivePlayer = (payload: Player): void => {
  store.dispatch({ type: ActionTypes.setActivePlayer, payload: payload });
};

export const UpdateGrid = (payload: {
  content: GridBlockType;
  id: number;
}): void => {
  store.dispatch({ type: ActionTypes.updateGrid, payload: payload });
};

export const ResetGrid = (): void => {
  store.dispatch({ type: ActionTypes.resetGrid });
};

export const ShowConfirmDialog = (payload: ConfirmDialogType): void => {
  store.dispatch({ type: ActionTypes.showConfirmDialog, payload: payload });
};
