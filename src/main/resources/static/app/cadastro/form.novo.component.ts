import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';

import {Animal}    from './animais';
import {AnimalService} from '../service/animal.service';

@Component({
    selector: 'form-novo',
    templateUrl: 'app/cadastro/cadastroAnimal.html',

})

export class FormNovoComponent implements OnInit {
    racas = ['Dorper', 'Santa Ines', 'Morada Nova', 'RND - Raça não definida',
        '1/2 Dorder/Santa Ines', '1/2 Dorper/Morada Nova', '1/2 Santa Ines/Morada Nova', '1/2 Dorper/RND', '1/2 Santa Ines/RND', '1/2 Morada Nova/RND',
        '3/4 Dorper', '3/4 Santa Ines', '3/4 Morada Nova'];
    animal: Animal = new Animal(0); //(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    escondeFoto = true;
    active = true;
    reprodutores: Animal[] = [];
    matriz: Animal[] = [];

    errorMessage: string;
    private RND = 3;
    filesToUpload: Array<File>;
    @ViewChild('foto') inputFoto: ElementRef;

    constructor(private animalService: AnimalService) {

        this.animal.pai = new Animal(0);
        this.animal.mae = new Animal(0);
        this.filesToUpload = [];

        //let dt = new Date().toLocaleDateString();

        //this.animal.dtNascimento = dt;
    }

    ngOnInit(): void {
        this.animalService.getAnimais()
            .then(animais => {
                //this.reprodutores = Animal[10]; 
                let x;
                for (x in animais) {
                    if (animais[x].sexo === 'M') {
                        this.reprodutores.push(animais[x]);
                    } else {
                        this.matriz.push(animais[x]);
                    }
                }
                //this.reprodutores = animais
                //this.reprodutores = (animais.find(x => x.sexo==='M')
            });
    }

    isShowModalReprodutor = false;
    isShowModalMatriz = false;
    isShowModalRaca = false;

    listaReprodutores() {
        this.isShowModalReprodutor = true;
    }
    listaMatriz() {
        this.isShowModalMatriz = true;
    }
    hideErrorMsg() {
        this.isShowModalReprodutor = false;
        this.isShowModalMatriz = false;
        this.isShowModalRaca = false;
    }

    escolhaReprodutor(reprodutor) {
        console.log('......');
        this.animal.pai = reprodutor;
        this.hideErrorMsg();
        //this.redefineRaca();
    }
    escolhaMatriz(matriz) {
        console.log('......');
        this.animal.mae = matriz;
        this.hideErrorMsg();
        //this.redefineRaca();
    }
    listaRaca(modal) {
        this.isShowModalRaca = true;
    }
    escolhaRaca(raca, modal) {
        this.animal.raca = raca;
        this.hideErrorMsg();
    }
    fileChangeEvent(fileInput: any) {
        console.log('...fileChangeEvent...');
        this.filesToUpload = <Array<File>>fileInput.target.files;

        let reader = new FileReader();
        let foto = this.inputFoto.nativeElement;
        let me = this;

        reader.onload = function() {
            //$('#blah').attr('src', e.target.result);
            foto.src = reader.result;
            me.escondeFoto = false;
        }
        reader.readAsDataURL(this.filesToUpload[0]);
    }
    onSubmit(frm: NgForm) {
        console.log( frm.value );
        this.animal.identificador = frm.value.identificador; 
        this.animal.peso = frm.value.peso;
        this.animal.dtNascimento = frm.value.dtNascimento;
        this.animal.idPai = this.animal.pai.id;
        this.animal.idMae = this.animal.mae.id;
        
        
        this.upload();
    }
    upload() {
        console.log('....upload....');
        let me = this;
        if (this.filesToUpload.length > 0) {
            this.makeFileRequest(this.animalService.rootUrl+"/upload", [], this.filesToUpload).then((result) => {
                console.log('-->sucesso:' + result);
                me.addAnimal(result['foto']);

            }, (error) => {
                console.error('-->error: ' + error);
            });
        } else {
            me.addAnimal(null);
        }
    }
    private cadastroOk(animal: Animal) {
        console.log(animal);
        this.submitted = true;
    }
    addAnimal(foto: string) {
        this.animal.foto = foto;
        console.log(this.animal);
        //        this.animalService.addAnimal( this.animal )
        //            .subscribe(
        //            animal => this.cadastroOk(animal),
        //            error => this.errorMessage = <any>error);
        
        this.animalService.create(this.animal)
            .then(ani => {
                this.cadastroOk(ani);
                //this.selectedHero = null;
            });
    }
    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        console.log('...makeFileRequest...');
        return new Promise((resolve, reject) => {
            let formData: any = new FormData();

            var xhr = new XMLHttpRequest();

            for (var i = 0; i < files.length; i++) {
                formData.append("file", files[i], files[i].name);
            }
            xhr.onreadystatechange = function() {
                console.log('....onreadystatechange....:'+xhr.readyState);
                if (xhr.readyState == 4) {
                    console.log('xhr.status: ' + xhr.status);
                    console.log('xhr.response: ' + xhr.response);
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            //var sBoundary = "---------------------------" + Date.now().toString(16);
            //xhr.setRequestHeader("Content-Type", "multipart\/form-data; boundary=" + sBoundary+"; file='xoxota'");
            xhr.send(formData);

        });
    }
}
