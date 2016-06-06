import {Animal}    from '../cadastroAnimal/animais';

export class Cobertura {
  
    public id: number;
    public dtCobertura: string;
    public reprodutor: Animal;
    public matriz: Animal;
    
    constructor(id) {
       this.id= id;  
  }
}