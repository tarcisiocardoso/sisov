import {Component, ViewChild, ElementRef} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Animal}    from '../cadastroAnimal/animais';
import {CadastroService} from '../cadastroAnimal/cadastro-service';
import {Cobertura} from './cobertura';
import {CoberturaService} from './cobertura-service';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Modal} from '../fuel-ui/fuel-ui';

import {MyDatePicker} from '../datePicker/mydatepicker';

@Component({
    templateUrl: 'app/cobertura/cobertura.html',
    providers: [HTTP_PROVIDERS, CadastroService, CoberturaService],
    directives: [MyDatePicker, Modal]
})
export class CoberturaFormComponent {
    submitted = false;
    active = true;
    cobertura: Cobertura = new Cobertura(0);
    reprodutores: Animal[];
    
    errorMessage: string;
    
    constructor( private _cadastroService: CadastroService, private coberturaService: CoberturaService ){
        this.cobertura.reprodutor = new Animal(0);
        this.cobertura.matriz = new Animal(0);
        let dt = new Date().toLocaleDateString();

        this.cobertura.dtCobertura = dt;
    }
    onSubmit(){
        console.log('ainda noa implementado');
         
    }
    
    private myDatePickerOptions = {
        todayBtnTxt: 'Hoje',
        dateFormat: 'dd/mm/yyyy',
        firstDayOfWeek: 'mo',
        sunHighlight: true
        //height: '34px',
        //width: '260px'
    };
    selectedDate: string = '20/12/2015';
    onDateChanged(event) {
        console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    }
    
    listaReprodutores(modal) {
        this._cadastroService.getAllReprodutor()
            .subscribe(
                       animais => this.reprodutores = animais,
                       error =>  this.errorMessage = <any>error);
        modal.showModal();    
    }
    listaMatriz(modal) {
        this._cadastroService.getAllMatriz()
            .subscribe(
                       animais => this.reprodutores = animais,
                       error =>  this.errorMessage = <any>error);
        modal.showModal();
    }
    
    escolhaReprodutor(reprodutor, modal) {
        console.log('......');
        this.cobertura.reprodutor = reprodutor;
        modal.closeModal();
        
        this.coberturaService.getPeso( this.cobertura.reprodutor.identificador ).subscribe(
                peso => this.cobertura.reprodutor.peso = peso,
                error => this.errorMessage = <any>error
            );
    }
    escolhaMatriz(matriz, modal) {
        console.log('......');
        this.cobertura.matriz = matriz;
        modal.closeModal();
    }
}
