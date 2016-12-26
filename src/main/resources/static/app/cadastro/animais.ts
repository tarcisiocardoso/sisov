export class Animal {

    public id: number;
    public identificador: string;
    public dtNascimento: Date;
    public pai: Animal;
    public mae: Animal;
    public idFilho: number;
    public raca: string;
    public sexo: string;
    public foto: string;
    public peso: string;
    public desempenho: string;
    
    public idPai: number;
    public idMae: number;

    public alterEgo: string;

    constructor(id) {
        this.id = id;
        this.desempenho = 'success'
        //this.pai = new Animal(0);
        //this.mae = new Animal(0);
    }

}