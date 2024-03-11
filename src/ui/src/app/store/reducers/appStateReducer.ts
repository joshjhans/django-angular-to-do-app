import {
    appInitialize,
    toDoDelete,
    toDoInsert,
    toDoUpdate
} from '@app/store/actions';
import { TAppState } from '@app/types';
import { createReducer, on } from '@ngrx/store';

export const initialState: TAppState = {
    toDos: [],
    users: []
};

export const appStateReducer = createReducer(
    initialState,
    on(appInitialize, (state, { appState }) => {
        console.log('reducer initialize', appState);
        return { ...state, toDos: appState.toDos, users: appState.users };
    }),
    on(toDoInsert, (state, { toDo }) => ({
        ...state,
        toDos: [...state.toDos, toDo]
    })),
    on(toDoDelete, (state, { toDo }) => ({
        ...state,
        toDos: state.toDos.filter((x) => x.toDoId != toDo.toDoId)
    })),
    on(toDoUpdate, (state, { toDo }) => ({
        ...state,
        toDos: state.toDos.map((x) => {
            if (x.toDoId === toDo.toDoId) {
                return toDo;
            }
            return x;
        })
    }))
);
