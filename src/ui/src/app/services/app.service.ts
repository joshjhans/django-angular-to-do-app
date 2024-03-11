import { Injectable } from '@angular/core';
import {
    Configuration,
    ToDo,
    ToDoApi,
    TodosCreateRequest,
    TodosListRequest,
    TodosUpdateRequest,
    UsersApi,
    UsersListRequest
} from '@app/clients';

@Injectable({ providedIn: 'root' })
export class AppService {
    private configuration: Configuration = new Configuration({
        basePath: 'http://localhost:8000'
    });
    private usersApi: UsersApi = new UsersApi();
    private toDoApi: ToDoApi = new ToDoApi();

    constructor() {
        this.usersApi = new UsersApi(this.configuration);
        this.toDoApi = new ToDoApi(this.configuration);
    }

    getUsers(query?: UsersListRequest) {
        return this.usersApi.usersList(query);
    }

    getToDos(query?: TodosListRequest) {
        return this.toDoApi.todosList(query);
    }

    insertToDo(toDo: TodosCreateRequest) {
        return this.toDoApi.todosCreate(toDo);
    }

    updateToDo(toDo: TodosUpdateRequest) {
        return this.toDoApi.todosUpdate(toDo);
    }

    deleteToDo(toDo: ToDo) {
        return this.toDoApi.todosDestroy({ toDoId: toDo.toDoId });
    }
}
