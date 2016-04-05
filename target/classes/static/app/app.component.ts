import {Component} from 'angular2/core';
import {HeroFormComponent} from './cadastroAnimal/hero-form.component'
@Component({
    selector: 'my-app',
    //template: '<h1>So para ver de qual le</h1>',
    template: '<hero-form></hero-form>',
    directives: [HeroFormComponent]
})
export class AppComponent { }
