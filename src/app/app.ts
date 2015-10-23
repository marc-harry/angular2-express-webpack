/*
 * Angular 2 decorators and services
 */
import {bootstrap, FORM_PROVIDERS, ELEMENT_PROBE_PROVIDERS, Directive, Component, View, ElementRef} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, Router, RouterOutlet, RouterLink} from 'angular2/router';
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
  directives: [RouterOutlet, RouterLink],
  template: `
        <ul>
          <li><a [router-link]=["/Home"]>Input</a></li>
          <li><a [router-link]=["/List"]>List</a></li>
        </ul>
        <div>
          <router-outlet></router-outlet>
        </div>
    `
})
@RouteConfig([
  { path: '/', component: TodoInput, as: 'Home' },
  { path: '/list', component: TodoList, as: 'List' }
])
class App {
  constructor() {
    console.log("App started!");
    console.log("1. 2. 3.")
  }
}

bootstrap(App, <any[]>[
  FORM_PROVIDERS,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ELEMENT_PROBE_PROVIDERS,
  TodoService
]);
