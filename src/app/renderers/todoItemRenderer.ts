import {Component, View, Input, NgClass, ViewEncapsulation} from "angular2/angular2";
import {TodoModel} from "../services/todoService";

@Component({
    selector: 'todo-item-renderer'
})
@View({
    encapsulation: ViewEncapsulation.Emulated, // This is the default
    directives: [NgClass],
    styles: [`
        .started {
            color: green;
        }

        .completed {
            text-decoration: line-through;
        }
    `],
    template: `
        <div>
            <span [ng-class]="todo.status">
                {{todo.title}} | {{todo.action}}
            </span>
            <button (click)="todo.toggle()">Toggle</button>
        </div>
    `
})
export class TodoItemRenderer {
    @Input() todo: TodoModel;
}