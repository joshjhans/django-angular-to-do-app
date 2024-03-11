import { ToDo } from '@app/clients';
import { createAction, props } from '@ngrx/store';

export const toDoDelete = createAction(
    '[ToDo] Delete',
    props<{ toDo: ToDo }>()
);
