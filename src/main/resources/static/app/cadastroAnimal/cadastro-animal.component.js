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
                    this.racas = ['Dorper', 'Santa Ines', 'Morada Nova', 'RND - Raça não definida', '1/2 D/SI', '1/2 D/MN', '1/2 SI/MO',
                        '3/4 Dorper', '3/4 Santa Ines', '3/4 Morada Nova'];
                    this.animal = new animais_1.Animal(0); //(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
                    this.submitted = false;
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
                    this.animal.dtNascimento = '01/01/2000';
                }
                AnimalFormComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    this.addAnimal();
                };
                AnimalFormComponent.prototype.addAnimal = function () {
                    var _this = this;
                    //if (!name) { return; }
                    console.log(this.animal);
                    this._cadastroService.addAnimal(this.animal)
                        .subscribe(function (animal) { return console.log(animal); }, function (error) { return _this.errorMessage = error; });
                };
                AnimalFormComponent.prototype.onDateChanged = function (event) {
                    console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
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
                AnimalFormComponent.prototype.escolhaReprodutor = function (reprodutor, modal) {
                    console.log('......');
                    this.animal.pai = reprodutor;
                    modal.closeModal();
                };
                AnimalFormComponent.prototype.escolhaMatriz = function (matriz, modal) {
                    console.log('......');
                    this.animal.mae = matriz;
                    modal.closeModal();
                };
                AnimalFormComponent.prototype.newHero = function () {
                    var _this = this;
                    this.animal = new animais_1.Animal(0);
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
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