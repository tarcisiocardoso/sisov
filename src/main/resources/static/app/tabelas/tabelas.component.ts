import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
        
import {AnimalService} from '../service/animal.service';
import {Animal}    from '../cadastro/animais';
import {Peso}    from '../cadastro/peso';

@Component({
    selector: 'tabelas',
    templateUrl: 'app/tabelas/tabelas.component.html'
})
export class TabelasComponent implements OnInit {

    reprodutores: Animal[] = [];
    matriz: Animal[] = [];
    borrego: Animal[] = [];
    desempenho = 'success';

    constructor(private router: Router, private animalService: AnimalService) { }

    ngOnInit(): void {
        this.animalService.getAnimais()
            .then(animais => {
                let x;
                for (x in animais) {
                    let ano = this.getAno(animais[x].dtNascimento);
                    if (ano < 1) {
                        this.borrego.push(animais[x] );
                    } else {
                        if (animais[x].sexo === 'M') {
                            this.reprodutores.push(animais[x]);
                        } else {
                            this.matriz.push(animais[x]);
                        }
                    }
                }
            });
    }

    public getAno(dataNascimento: Date): number {
        if (!dataNascimento) return -1;
        let dt = new Date(dataNascimento);

        let datenew = new Date(Date.now());

        let yNow = datenew.getFullYear();
        let yold = dt.getFullYear();


        return yNow - yold;
    }
    public gotoDetail(animal: Animal ): void {
        console.log('ainda nao implementado: ', animal);
        
        localStorage.setItem("animal", JSON.stringify(animal) );
        
        let link = ['/detalhe', animal.id];
        //let link = ['/detalhe'];
        this.router.navigate(link);
        
    }
    public getIdade(dataNascimento: Date): string {
        if (!dataNascimento) return "-";
        let ret = '';

        let dt = new Date(dataNascimento);

        let datenew = new Date(Date.now());

        let yNow = datenew.getFullYear();
        let mNow = datenew.getMonth();
        let dNow = datenew.getDate();

        let yold = dt.getFullYear();
        let mold = dt.getMonth();
        let dold = dt.getDate();

        let diff = yNow - yold;

        if (mold > mNow) {
            diff--;
            ret = diff + ' ano ';

            if (dold > dNow) {
                diff--;
                ret += diff + " mes ";
            } else {
                if (dold != dNow) {
                    diff = dold - dNow;
                    ret += diff + " dia ";
                }
            }
        } else {
            if (mold == mNow) {
                if (dold > dNow) diff--;
                if (diff == 0) {
                    if (dold > dNow) {
                        diff = 30 - dold;
                        ret += diff + " dia ";
                    } else {
                        //ret = "recem nascido"
                        diff = dNow - dold;
                        ret = diff + " dia";
                    }
                } else {
                    ret = diff + ' ano ';
                    if (dold > dNow) {
                        diff--;
                        ret += diff + " mes ";
                    } else {
                        if (dold != dNow) {
                            diff = dold - dNow;
                            ret += diff + " dia ";
                        }
                    }
                }
            } else {
                ret = diff + ' ano ';
                diff = Math.abs(mold - mNow);
                if (dold > dNow) {
                    diff--;
                    ret += diff + " mes ";
                } else {
                    ret += diff + " mes ";
                    if (dold != dNow) {
                        diff = Math.abs(dold - dNow);
                        ret += diff + " dia ";
                    }
                }
            }
        }
        return ret;
    }
}    
