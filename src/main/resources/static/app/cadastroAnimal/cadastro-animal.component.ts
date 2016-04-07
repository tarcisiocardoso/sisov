import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Animal }    from './animais';
@Component({
  templateUrl: 'app/cadastroAnimal/cadastroAnimal.html'
})
export class AnimalFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Animal(18, '001', '01/01/2016'); //(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;
  newHero() {
    this.model = new Animal(42, '', '');
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
}