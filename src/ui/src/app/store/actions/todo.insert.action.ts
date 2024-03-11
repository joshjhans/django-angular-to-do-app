import { ToDo } from '@app/clients';
import { createAction, props } from '@ngrx/store';

export const toDoInsert = createAction(
    '[ToDo] Insert',
    props<{ toDo: ToDo }>()
);
