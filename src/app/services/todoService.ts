import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

export class TodoModel {
    static STARTED: string = "started";
    static COMPLETED: string = "completed";
    status: string = TodoModel.STARTED;

    constructor(
         public title: string = "",
         public action: string = ""
    ) {}

    toggle(): void {
        if (this.status == TodoModel.STARTED) this.status = TodoModel.COMPLETED;
        else this.status = TodoModel.STARTED;
    }
}

@Injectable()
export class TodoService {
    public baseUrl: string = "http://localhost:3000/api/todos";

    constructor(public http: Http) {

    }

    addTodo(value:TodoModel):void {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl, JSON.stringify(value), { headers: headers }).map(res => res.json())
            .subscribe(
                data => console.log(data),
                () => console.log("Done")
            );
    }

    getTodos(): any {
        return this.http.get(this.baseUrl).map(res => {
            var todoResult: any[] = [];
            for (let todo of res.json()) {
                todoResult.push(new TodoModel(todo.title, todo.action));
            }
            return todoResult;
        });
    }
}