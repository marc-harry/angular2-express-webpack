import {Component, View, FORM_DIRECTIVES} from "angular2/angular2";
import {TodoService, TodoModel} from "../services/todoService";

@Component({
    selector:'todo-input'
})
@View({
    directives: [FORM_DIRECTIVES],
    styles: [
        `
            form {
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;
                width: 250px;
            }
        `
    ],
    template: `
        <form (ng-submit)="onSubmit()">
            Titles :  <input #title type="text" [(ng-model)]="todoModel.title">
            Action: <input type="text" [(ng-model)]="todoModel.action">
            <button type="submit" (click)="title.focus()">Add Todo</button>
        </form>
    `
})
export class TodoInput {
    todoModel: TodoModel = new TodoModel();

    constructor(
        public todoService: TodoService
    ) {
    }

    onSubmit() {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }
}
