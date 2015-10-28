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

import {TodoInput} from "./components/todoInput";
import {TodoList} from "./components/todoList";
import {TodoService} from "./services/todoService";

@Component({
  selector:'app'
})
@View({
  directives: [RouterOutlet, RouterLink],
  template: `
        <nav class="navbar-inverse">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" [router-link]=["/Home"]>Angular 2</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li><a [router-link]=["/Home"]>Input</a></li>
                <li><a [router-link]=["/List"]>List</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <br>
        <div class="container">
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
