import { selectAppState } from '@app/store/selectors/selectAppState';
import { createSelector } from '@ngrx/store';

export const selectUsers = createSelector(
    selectAppState,
    (state) => state.users
);
