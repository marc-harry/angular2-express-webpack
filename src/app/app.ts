/*
 * Angular 2 decorators and services
 */
import {bootstrap, FORM_PROVIDERS, ELEMENT_PROBE_PROVIDERS, Directive, Component, View, ElementRef} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, Router} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

import '../stylesheets/style.scss';

/*
 * Angular Directives
 */
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {TodoInput} from "./todoInput";
import {TodoList} from "./todoList";
import {TodoService} from "./services/todoService";

@Component({
  selector:'app'
})
@View({
  directives: [TodoInput, TodoList],
  template: `
        <div>
            <todo-input></todo-input>
            <todo-list></todo-list>
        </div>
    `
})

class App {
  constructor() {
    console.log("App started!");
    console.log("1. 2. 3.")
  }
}

bootstrap(App, <any[]>[
  // These are dependencies of our App
  FORM_PROVIDERS,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ELEMENT_PROBE_PROVIDERS,
  TodoService
]);
