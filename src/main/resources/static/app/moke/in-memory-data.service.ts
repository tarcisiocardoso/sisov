import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Animal}    from '../cadastro/animais';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let animais = [
      {id: 1, sexo: 'M', raca: 'Dorper', dtNascimento: new Date(2016, 10, 1), foto:'/foto/dorper.jpeg'},
      {id: 2, sexo: 'M', raca: 'Dorper', dtNascimento: new Date(2015, 10, 9), foto:'/foto/dorper.jpeg'},
      {id: 3, sexo: 'M', raca: 'Dorper', dtNascimento: new Date(2015, 0, 1) , foto:'/foto/dorper.jpeg'},
      {id: 4, sexo: 'F', raca: 'Dorper', dtNascimento: new Date(2014, 0, 1) , foto:'/foto/femea_dorper.jpg'}
    ];
    
    let upload = [
    
    ];
    
    return {animais};
  }
}