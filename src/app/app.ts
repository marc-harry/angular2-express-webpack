/*
 * Angular 2 decorators and services
 */
import {bootstrap, FORM_PROVIDERS, ELEMENT_PROBE_PROVIDERS, Component, View} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';

import '../stylesheets/style.scss';

import {TodoInput} from "./components/todoInput";
import {TodoList} from "./components/todoList";
import {TodoService} from "./services/todoService";

@Component({
	selector: "app"
})
@View({
	directives: [RouterOutlet, RouterLink],
	templateUrl : "index.html";
})
@RouteConfig([
	{ path: '/', component: TodoInput, as: 'Home' },
	{ path: '/list', component: TodoList, as: 'List' }
])
class App {
	constructor() {
		console.log("App started!");
		console.log("1. 2. 3.");
	}
}

bootstrap(App, <any[]>[
	FORM_PROVIDERS,
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	ELEMENT_PROBE_PROVIDERS,
	TodoService
]);
