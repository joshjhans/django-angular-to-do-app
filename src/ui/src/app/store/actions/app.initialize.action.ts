import { TAppState } from '@app/types';
import { createAction, props } from '@ngrx/store';

export const appInitialize = createAction(
    '[App] Initialize',
    props<{ appState: TAppState }>()
);
