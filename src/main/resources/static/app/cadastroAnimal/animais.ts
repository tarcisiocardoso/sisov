export class Animal {
  
    public id: number;
    public identificador: string;
    public dtNascimento: string;
    public pai: Animal;
    public mae: Animal;
    public idFilho: number;
    public raca: string;
    public sexo: string;
    public foto: string;
    
    public alterEgo: string;
    
    constructor(id) {
       this.id= id;  
       //this.pai = new Animal(0);
       //this.mae = new Animal(0);
  }
}