import { selectAppState } from '@app/store/selectors/selectAppState';
import { createSelector } from '@ngrx/store';

export const selectToDos = createSelector(
    selectAppState,
    (state) => state.toDos
);
