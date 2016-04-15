import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Animal}    from './animais';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {CadastroService} from './cadastro-service';
import {Modal} from '../fuel-ui/fuel-ui';

import {MyDatePicker} from '../datePicker/mydatepicker';


@Component({
    templateUrl: 'app/cadastroAnimal/cadastroAnimal.html',
    providers: [HTTP_PROVIDERS, CadastroService],
    directives: [MyDatePicker, Modal]
})
export class AnimalFormComponent {

    reprodutores: Animal[];
    errorMessage: string;

    racas = ['Dorper', 'Santa Ines', 'Morada Nova', 'RND - Raça não definida', '1/2 D/SI', '1/2 D/MN', '1/2 SI/MO',
        '3/4 Dorper', '3/4 Santa Ines', '3/4 Morada Nova'];
    animal: Animal = new Animal(0); //(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    
    submitted = false;
    
    constructor(private _cadastroService: CadastroService) { 
        this.animal.pai = new Animal(0);
        this.animal.mae = new Animal(0);   
        this.animal.dtNascimento = '01/01/2000';
    }
    
    onSubmit() {
        this.submitted = true;
        this.addAnimal();
    }

    addAnimal() {
        //if (!name) { return; }
        console.log( this.animal );
        this._cadastroService.addAnimal( this.animal )
            .subscribe(
            animal => console.log(animal),
            error => this.errorMessage = <any>error);
    }

    active = true;

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
        this.animal.pai = reprodutor;
        modal.closeModal();
    }
    escolhaMatriz(matriz, modal) {
        console.log('......');
        this.animal.mae = matriz;
        modal.closeModal();
    }
    newHero() {
        this.animal = new Animal(0);
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}