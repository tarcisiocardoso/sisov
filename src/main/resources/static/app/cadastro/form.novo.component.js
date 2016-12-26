"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var animais_1 = require('./animais');
var animal_service_1 = require('../service/animal.service');
var FormNovoComponent = (function () {
    function FormNovoComponent(animalService) {
        this.animalService = animalService;
        this.racas = ['Dorper', 'Santa Ines', 'Morada Nova', 'RND - Raça não definida',
            '1/2 Dorder/Santa Ines', '1/2 Dorper/Morada Nova', '1/2 Santa Ines/Morada Nova', '1/2 Dorper/RND', '1/2 Santa Ines/RND', '1/2 Morada Nova/RND',
            '3/4 Dorper', '3/4 Santa Ines', '3/4 Morada Nova'];
        this.animal = new animais_1.Animal(0); //(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
        this.escondeFoto = true;
        this.active = true;
        this.reprodutores = [];
        this.matriz = [];
        this.RND = 3;
        this.isShowModalReprodutor = false;
        this.isShowModalMatriz = false;
        this.isShowModalRaca = false;
        this.animal.pai = new animais_1.Animal(0);
        this.animal.mae = new animais_1.Animal(0);
        this.filesToUpload = [];
        //let dt = new Date().toLocaleDateString();
        //this.animal.dtNascimento = dt;
    }
    FormNovoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animalService.getAnimais()
            .then(function (animais) {
            //this.reprodutores = Animal[10]; 
            var x;
            for (x in animais) {
                if (animais[x].sexo === 'M') {
                    _this.reprodutores.push(animais[x]);
                }
                else {
                    _this.matriz.push(animais[x]);
                }
            }
            //this.reprodutores = animais
            //this.reprodutores = (animais.find(x => x.sexo==='M')
        });
    };
    FormNovoComponent.prototype.listaReprodutores = function () {
        this.isShowModalReprodutor = true;
    };
    FormNovoComponent.prototype.listaMatriz = function () {
        this.isShowModalMatriz = true;
    };
    FormNovoComponent.prototype.hideErrorMsg = function () {
        this.isShowModalReprodutor = false;
        this.isShowModalMatriz = false;
        this.isShowModalRaca = false;
    };
    FormNovoComponent.prototype.escolhaReprodutor = function (reprodutor) {
        console.log('......');
        this.animal.pai = reprodutor;
        this.hideErrorMsg();
        //this.redefineRaca();
    };
    FormNovoComponent.prototype.escolhaMatriz = function (matriz) {
        console.log('......');
        this.animal.mae = matriz;
        this.hideErrorMsg();
        //this.redefineRaca();
    };
    FormNovoComponent.prototype.listaRaca = function (modal) {
        this.isShowModalRaca = true;
    };
    FormNovoComponent.prototype.escolhaRaca = function (raca, modal) {
        this.animal.raca = raca;
        this.hideErrorMsg();
    };
    FormNovoComponent.prototype.fileChangeEvent = function (fileInput) {
        console.log('...fileChangeEvent...');
        this.filesToUpload = fileInput.target.files;
        var reader = new FileReader();
        var foto = this.inputFoto.nativeElement;
        var me = this;
        reader.onload = function () {
            //$('#blah').attr('src', e.target.result);
            foto.src = reader.result;
            me.escondeFoto = false;
        };
        reader.readAsDataURL(this.filesToUpload[0]);
    };
    FormNovoComponent.prototype.onSubmit = function (frm) {
        console.log(frm.value);
        this.animal.identificador = frm.value.identificador;
        this.animal.peso = frm.value.peso;
        this.animal.dtNascimento = frm.value.dtNascimento;
        this.animal.idPai = this.animal.pai.id;
        this.animal.idMae = this.animal.mae.id;
        this.upload();
    };
    FormNovoComponent.prototype.upload = function () {
        console.log('....upload....');
        var me = this;
        if (this.filesToUpload.length > 0) {
            this.makeFileRequest(this.animalService.rootUrl + "/upload", [], this.filesToUpload).then(function (result) {
                console.log('-->sucesso:' + result);
                me.addAnimal(result['foto']);
            }, function (error) {
                console.error('-->error: ' + error);
            });
        }
        else {
            me.addAnimal(null);
        }
    };
    FormNovoComponent.prototype.cadastroOk = function (animal) {
        console.log(animal);
        this.submitted = true;
    };
    FormNovoComponent.prototype.addAnimal = function (foto) {
        var _this = this;
        this.animal.foto = foto;
        console.log(this.animal);
        //        this.animalService.addAnimal( this.animal )
        //            .subscribe(
        //            animal => this.cadastroOk(animal),
        //            error => this.errorMessage = <any>error);
        this.animalService.create(this.animal)
            .then(function (ani) {
            _this.cadastroOk(ani);
            //this.selectedHero = null;
        });
    };
    FormNovoComponent.prototype.makeFileRequest = function (url, params, files) {
        console.log('...makeFileRequest...');
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("file", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                console.log('....onreadystatechange....:' + xhr.readyState);
                if (xhr.readyState == 4) {
                    console.log('xhr.status: ' + xhr.status);
                    console.log('xhr.response: ' + xhr.response);
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            //var sBoundary = "---------------------------" + Date.now().toString(16);
            //xhr.setRequestHeader("Content-Type", "multipart\/form-data; boundary=" + sBoundary+"; file='xoxota'");
            xhr.send(formData);
        });
    };
    __decorate([
        core_1.ViewChild('foto'), 
        __metadata('design:type', core_1.ElementRef)
    ], FormNovoComponent.prototype, "inputFoto", void 0);
    FormNovoComponent = __decorate([
        core_1.Component({
            selector: 'form-novo',
            templateUrl: 'app/cadastro/cadastroAnimal.html',
        }), 
        __metadata('design:paramtypes', [animal_service_1.AnimalService])
    ], FormNovoComponent);
    return FormNovoComponent;
}());
exports.FormNovoComponent = FormNovoComponent;
//# sourceMappingURL=form.novo.component.js.map