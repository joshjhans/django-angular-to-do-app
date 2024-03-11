import { ToDo } from '@app/clients';
import { createAction, props } from '@ngrx/store';

export const toDoUpdate = createAction(
    '[ToDo] Update',
    props<{ toDo: ToDo }>()
);
