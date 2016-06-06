System.register(['angular2/core', './animais', 'angular2/http', './cadastro-service', '../fuel-ui/fuel-ui', '../datePicker/mydatepicker'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, animais_1, http_1, cadastro_service_1, fuel_ui_1, mydatepicker_1;
    var AnimalFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (animais_1_1) {
                animais_1 = animais_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (cadastro_service_1_1) {
                cadastro_service_1 = cadastro_service_1_1;
            },
            function (fuel_ui_1_1) {
                fuel_ui_1 = fuel_ui_1_1;
            },
            function (mydatepicker_1_1) {
                mydatepicker_1 = mydatepicker_1_1;
            }],
        execute: function() {
            AnimalFormComponent = (function () {
                function AnimalFormComponent(_cadastroService) {
                    this._cadastroService = _cadastroService;
                    this.RND = 3;
                    this.racas = ['Dorper', 'Santa Ines', 'Morada Nova', 'RND - Raça não definida',
                        '1/2 Dorder/Santa Ines', '1/2 Dorper/Morada Nova', '1/2 Santa Ines/Morada Nova', '1/2 Dorper/RND', '1/2 Santa Ines/RND', '1/2 Morada Nova/RND',
                        '3/4 Dorper', '3/4 Santa Ines', '3/4 Morada Nova'];
                    this.animal = new animais_1.Animal(0); //(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
                    this.submitted = false;
                    this.escondeFoto = true;
                    this.active = true;
                    this.myDatePickerOptions = {
                        todayBtnTxt: 'Hoje',
                        dateFormat: 'dd/mm/yyyy',
                        firstDayOfWeek: 'mo',
                        sunHighlight: true
                    };
                    this.selectedDate = '20/12/2015';
                    this.animal.pai = new animais_1.Animal(0);
                    this.animal.mae = new animais_1.Animal(0);
                    this.filesToUpload = [];
                    var dt = new Date().toLocaleDateString();
                    this.animal.dtNascimento = dt;
                }
                AnimalFormComponent.prototype.ngAfterViewInit = function () {
                    console.log(this.inputFoto.nativeElement);
                };
                AnimalFormComponent.prototype.upload = function () {
                    console.log('....upload....');
                    var me = this;
                    if (this.filesToUpload.length > 0) {
                        this.makeFileRequest("/upload", [], this.filesToUpload).then(function (result) {
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
                AnimalFormComponent.prototype.novoCadastro = function () {
                    this.animal = new animais_1.Animal(0);
                    this.submitted = false;
                };
                AnimalFormComponent.prototype.fileChangeEvent = function (fileInput) {
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
                AnimalFormComponent.prototype.makeFileRequest = function (url, params, files) {
                    console.log('...makeFileRequest...');
                    return new Promise(function (resolve, reject) {
                        var formData = new FormData();
                        var xhr = new XMLHttpRequest();
                        for (var i = 0; i < files.length; i++) {
                            formData.append("file", files[i], files[i].name);
                        }
                        xhr.onreadystatechange = function () {
                            console.log('....onreadystatechange....');
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
                AnimalFormComponent.prototype.onSubmit = function () {
                    this.upload();
                };
                AnimalFormComponent.prototype.addAnimal = function (foto) {
                    var _this = this;
                    this.animal.foto = foto;
                    console.log(this.animal);
                    this._cadastroService.addAnimal(this.animal)
                        .subscribe(function (animal) { return _this.cadastroOk(animal); }, function (error) { return _this.errorMessage = error; });
                };
                AnimalFormComponent.prototype.cadastroOk = function (animal) {
                    console.log(animal);
                    this.submitted = true;
                };
                AnimalFormComponent.prototype.onDateChanged = function (event) {
                    console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
                };
                AnimalFormComponent.prototype.listaRaca = function (modal) {
                    modal.showModal();
                };
                AnimalFormComponent.prototype.listaReprodutores = function (modal) {
                    var _this = this;
                    this._cadastroService.getAllReprodutor()
                        .subscribe(function (animais) { return _this.reprodutores = animais; }, function (error) { return _this.errorMessage = error; });
                    modal.showModal();
                };
                AnimalFormComponent.prototype.listaMatriz = function (modal) {
                    var _this = this;
                    this._cadastroService.getAllMatriz()
                        .subscribe(function (animais) { return _this.reprodutores = animais; }, function (error) { return _this.errorMessage = error; });
                    modal.showModal();
                };
                AnimalFormComponent.prototype.escolhaRaca = function (raca, modal) {
                    this.animal.raca = raca;
                    modal.closeModal();
                };
                AnimalFormComponent.prototype.escolhaReprodutor = function (reprodutor, modal) {
                    console.log('......');
                    this.animal.pai = reprodutor;
                    modal.closeModal();
                    this.redefineRaca();
                };
                AnimalFormComponent.prototype.escolhaMatriz = function (matriz, modal) {
                    console.log('......');
                    this.animal.mae = matriz;
                    modal.closeModal();
                    this.redefineRaca();
                };
                AnimalFormComponent.prototype.newHero = function () {
                    var _this = this;
                    this.animal = new animais_1.Animal(0);
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                AnimalFormComponent.prototype.getMDC = function (u, v) {
                    var U = u, V = v;
                    while (true) {
                        if (!(U %= V))
                            return V;
                        if (!(V %= U))
                            return U;
                    }
                };
                //convert a decimal into a fraction
                AnimalFormComponent.prototype.getFraction = function (decimal) {
                    if (!decimal) {
                        return '1';
                    }
                    var whole = String(decimal).split('.')[0];
                    decimal = parseFloat("." + String(decimal).split('.')[1]);
                    var num = "1";
                    var z = 0;
                    for (z = 0; z < String(decimal).length - 2; z++) {
                        num += "0";
                    }
                    decimal = decimal * parseFloat(num);
                    num = parseInt(num);
                    for (z = 2; z < decimal + 1; z++) {
                        if (decimal % z == 0 && num % z == 0) {
                            decimal = decimal / z;
                            num = num / z;
                            z = 2;
                        }
                    }
                    //if format of fraction is xx/xxx
                    if (decimal.toString().length == 2 &&
                        num.toString().length == 3) {
                        //reduce by removing trailing 0's
                        // '
                        decimal = Math.round(Math.round(decimal) / 10);
                        num = Math.round(Math.round(num) / 10);
                    }
                    else if (decimal.toString().length == 2 &&
                        num.toString().length == 2) {
                        decimal = Math.round(decimal / 10);
                        num = Math.round(num / 10);
                    }
                    //get highest common factor to simplify
                    var t = this.getMDC(decimal, num);
                    //return the fraction after simplifying it
                    if (isNaN(+whole) === true) {
                        whole = "";
                    }
                    if (isNaN(decimal) === true) {
                        return ((+whole == 0) ? "" : whole);
                    }
                    else {
                        return ((+whole == 0) ? "" : whole + " ") + decimal / t + "/" + num / t;
                    }
                };
                AnimalFormComponent.prototype.redefineRaca = function () {
                    console.log('...redefineRaca....');
                    if (this.animal.pai.raca == this.animal.mae.raca) {
                        this.animal.raca = this.animal.pai.raca; // animais da mesma raça    
                    }
                    else {
                        var rPai = this.normalizaRaca(this.animal.pai.raca);
                        var rMae = this.normalizaRaca(this.animal.mae.raca);
                        var fPai = rPai.fracao / 2;
                        var fMae = rMae.fracao / 2;
                        var fracao = '1';
                        var raca = rPai.raca + '/' + rMae.raca;
                        if (fMae == fPai) {
                            fracao = this.getFraction(fPai);
                        }
                        else {
                            fracao = this.getFraction(fPai + fMae);
                        }
                        if (fPai > fMae) {
                            if (rPai.raca.indexOf(rMae.raca) >= 0 || rMae.raca.indexOf(rPai.raca) >= 0) {
                                raca = rPai.raca;
                                if (fMae > 0.25)
                                    fracao = '';
                            }
                            else if (fPai < 0.5) {
                                raca = this.racas[this.RND];
                                fracao = '';
                            }
                            else {
                                raca = rPai.raca;
                            }
                        }
                        else if (fMae > fPai) {
                            if (rMae.raca.indexOf(rPai.raca) >= 0 || rPai.raca.indexOf(rMae.raca) >= 0) {
                                raca = rMae.raca;
                                if (fPai > 0.25)
                                    fracao = '';
                            }
                            else if (fMae < 0.5) {
                                raca = this.racas[this.RND];
                                fracao = '';
                            }
                            else {
                                raca = rMae.raca;
                            }
                        }
                        else {
                            //não possue raça em comum rnd
                            if (!(rMae.raca.indexOf(rPai.raca) >= 0 || rPai.raca.indexOf(rMae.raca) >= 0)) {
                                raca = this.racas[this.RND];
                                fracao = '';
                            }
                        }
                        this.animal.raca = fracao + ' ' + raca;
                        console.log('fPai + fMae [' + fPai + ' + ' + fMae + ']:' + (fPai + fMae) + ' <=> ' + rPai.raca + ', ' + rMae.raca + ' , fracao: ' + fracao);
                    }
                    console.log('>>> ' + this.animal.raca + ' <<<<<<<<');
                };
                AnimalFormComponent.prototype.getIndiceRaca = function (raca) {
                    var index = -1, i = 0;
                    for (i = 0; i < this.racas.length; i++) {
                        if (raca == this.racas[i]) {
                            index = i;
                            break;
                        }
                    }
                    return index;
                };
                AnimalFormComponent.prototype.normalizaRaca = function (rc) {
                    if (!rc) {
                        return {
                            fracao: 1,
                            raca: 'RND'
                        };
                    }
                    var f = 1;
                    if (!isNaN(+rc.charAt(0))) {
                        var pos = rc.indexOf(' ');
                        var frac = rc.substring(0, pos);
                        var arr = frac.split('/');
                        var num = arr[0];
                        var dem = arr[1];
                        f = num / dem;
                        rc = rc.substring(pos + 1, rc.length);
                    }
                    var retorno = {
                        fracao: f,
                        raca: rc
                    };
                    return retorno;
                };
                __decorate([
                    core_1.ViewChild('foto'), 
                    __metadata('design:type', core_1.ElementRef)
                ], AnimalFormComponent.prototype, "inputFoto", void 0);
                AnimalFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/cadastroAnimal/cadastroAnimal.html',
                        providers: [http_1.HTTP_PROVIDERS, cadastro_service_1.CadastroService],
                        directives: [mydatepicker_1.MyDatePicker, fuel_ui_1.Modal]
                    }), 
                    __metadata('design:paramtypes', [cadastro_service_1.CadastroService])
                ], AnimalFormComponent);
                return AnimalFormComponent;
            }());
            exports_1("AnimalFormComponent", AnimalFormComponent);
        }
    }
});
//# sourceMappingURL=cadastro-animal.component.js.map