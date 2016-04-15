import {Component, OnInit} from 'angular2/core';
import {ConteudoService}       from './conteudo-service';
import {Animal} from '../cadastroAnimal/animais';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    //template: '<h1>So para ver de qual le</h1>'//,
    //template: '<hero-form></hero-form>',
    templateUrl: './app/conteudo/main.html',
    providers: [Http, HTTP_PROVIDERS, ConteudoService]
})

export class ConteudoComponent implements OnInit {

  constructor (private _conteudoService: ConteudoService) {}
    
  errorMessage: string;
  animais:Animal[];
    
  ngOnInit() { this.getAnimais(); }
    
  getAnimais() {
    this._conteudoService.getAnimais()
                     .subscribe(
                       animais => this.animais = animais,
                       error =>  this.errorMessage = <any>error);
  }
//  addAniaml (name: string) {
//    if (!name) {return;}
//    this._conteudoService.addConteudo(name)
//                     .subscribe(
//                       animal  => this.animais.push(animal),
//                       error =>  this.errorMessage = <any>error);
//  }
}
