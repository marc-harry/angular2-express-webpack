import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

export class TodoModel {
    static STARTED: string = "started";
    static COMPLETED: string = "completed";
    status: string = TodoModel.STARTED;

    constructor(
        public title: string = "",
        public action: string = ""
    ) { }

    toggle(): void {
        if (this.status === TodoModel.STARTED) {
            this.status = TodoModel.COMPLETED;
        } else {
            this.status = TodoModel.STARTED;
        }
    }
}

@Injectable()
export class TodoService {
    public baseUrl: string = "http://localhost:3000/api/todos";

    constructor(public http: Http) {

    }

    todos: TodoModel[] = [
        new TodoModel("eat", "nom nom"),
        new TodoModel("sleep", "zzzzzzz"),
        new TodoModel("code", "type type")
    ];

    addTodo(value: TodoModel): void {
        this.todos.push(value);
    }

    getTodos(): void {
        this.http.get(this.baseUrl).subscribe(res => {
            console.log(res);
        });
    }
}