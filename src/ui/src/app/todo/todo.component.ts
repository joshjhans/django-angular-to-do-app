import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ToDo, User } from '@app/clients';
import { AppService } from '@app/services';
import {
    appInitialize,
    toDoDelete,
    toDoInsert,
    toDoUpdate
} from '@app/store/actions';
import { selectToDos, selectUsers } from '@app/store/selectors';
import { TAppState } from '@app/types';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-todo',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule,
        NgFor,
        MatListModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule
    ],
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
    providers: [AppService]
})
export class TodoComponent {
    toDos: Observable<ToDo[]> = this.store.pipe(select(selectToDos));
    users: Observable<User[]> = this.store.pipe(select(selectUsers));

    constructor(private store: Store<TAppState>, private service: AppService) {
        Promise.all([service.getToDos(), service.getUsers()]).then(
            ([toDos, users]) => {
                this.toDos;
                store.dispatch(
                    appInitialize({
                        appState: {
                            toDos: toDos.results || [],
                            users: users.results || []
                        }
                    })
                );
            }
        );
    }

    toggleToDo(toDo: ToDo) {
        const newToDo: ToDo = {
            ...toDo,
            isComplete: !toDo.isComplete
        };
        this.service
            .updateToDo({
                toDoId: toDo.toDoId,
                toDo: newToDo
            })
            .then(() => {
                this.store.dispatch(
                    toDoUpdate({
                        toDo: newToDo
                    })
                );
            });
    }

    renameToDo(toDo: ToDo) {
        const newToDo: ToDo = {
            ...toDo,
            name: toDo.name
        };
        this.service
            .updateToDo({
                toDoId: toDo.toDoId,
                toDo: newToDo
            })
            .then(() => {
                this.store.dispatch(
                    toDoUpdate({
                        toDo: newToDo
                    })
                );
            });
    }

    insertToDo(name: string) {
        this.service
            .insertToDo({
                toDo: {
                    toDoId: 1,
                    name: name,
                    description: name
                }
            })
            .then((toDo) => {
                this.store.dispatch(toDoInsert({ toDo: toDo }));
            });
    }

    deleteToDo(toDo: ToDo) {
        this.service.deleteToDo(toDo).then(() => {
            this.store.dispatch(toDoDelete({ toDo: toDo }));
        });
    }
}
