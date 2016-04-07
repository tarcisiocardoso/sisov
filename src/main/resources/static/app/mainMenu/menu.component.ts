import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {AnimalFormComponent} from '../cadastroAnimal/cadastro-animal.component'
import {ConteudoComponent} from '../conteudo/conteudo.component'

@Component({
    selector: 'menu-app',
    templateUrl: 'app/mainMenu/menu.html',
    //template: '<hero-form></hero-form>',
    directives: [ROUTER_DIRECTIVES]
})
    
@RouteConfig([
  { path: '/dashboard', as: 'Dashboard', component: ConteudoComponent, useAsDefault: true },
  { path: '/cadastro', as: 'Cadastro', component: AnimalFormComponent }
])
export class MenuComponent { }
