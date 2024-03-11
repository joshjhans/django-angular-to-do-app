import { ToDo, User } from '@app/clients';

export type TAppState = {
    users: User[];
    toDos: ToDo[];
};
