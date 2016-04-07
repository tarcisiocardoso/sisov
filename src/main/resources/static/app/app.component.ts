import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {MenuComponent} from './mainMenu/menu.component'

//import {MenuComponent} from './mainMenu/menu.component'

//@Component({
//    selector: 'my-app',
//    //template: '<h1>So para ver de qual le</h1>',
//    //template: '<hero-form></hero-form>',
//    templateUrl: 'app/main.html',
//    directives: [HeroFormComponent, MenuComponent]
//})
@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
 @RouteConfig([
  { 
    path: '/conteudo/...',
    name: 'Contudo',
    component: MenuComponent,
    useAsDefault: true
  }
])
export class AppComponent { }
