System.register(['angular2/core', '../cadastroAnimal/animais', '../cadastroAnimal/cadastro-service', './cobertura', './cobertura-service', 'angular2/http', '../fuel-ui/fuel-ui', '../datePicker/mydatepicker'], function(exports_1, context_1) {
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
    var core_1, animais_1, cadastro_service_1, cobertura_1, cobertura_service_1, http_1, fuel_ui_1, mydatepicker_1;
    var CoberturaFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (animais_1_1) {
                animais_1 = animais_1_1;
            },
            function (cadastro_service_1_1) {
                cadastro_service_1 = cadastro_service_1_1;
            },
            function (cobertura_1_1) {
                cobertura_1 = cobertura_1_1;
            },
            function (cobertura_service_1_1) {
                cobertura_service_1 = cobertura_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (fuel_ui_1_1) {
                fuel_ui_1 = fuel_ui_1_1;
            },
            function (mydatepicker_1_1) {
                mydatepicker_1 = mydatepicker_1_1;
            }],
        execute: function() {
            CoberturaFormComponent = (function () {
                function CoberturaFormComponent(_cadastroService, coberturaService) {
                    this._cadastroService = _cadastroService;
                    this.coberturaService = coberturaService;
                    this.submitted = false;
                    this.active = true;
                    this.cobertura = new cobertura_1.Cobertura(0);
                    this.myDatePickerOptions = {
                        todayBtnTxt: 'Hoje',
                        dateFormat: 'dd/mm/yyyy',
                        firstDayOfWeek: 'mo',
                        sunHighlight: true
                    };
                    this.selectedDate = '20/12/2015';
                    this.cobertura.reprodutor = new animais_1.Animal(0);
                    this.cobertura.matriz = new animais_1.Animal(0);
                    var dt = new Date().toLocaleDateString();
                    this.cobertura.dtCobertura = dt;
                }
                CoberturaFormComponent.prototype.onSubmit = function () {
                    console.log('ainda noa implementado');
                };
                CoberturaFormComponent.prototype.onDateChanged = function (event) {
                    console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
                };
                CoberturaFormComponent.prototype.listaReprodutores = function (modal) {
                    var _this = this;
                    this._cadastroService.getAllReprodutor()
                        .subscribe(function (animais) { return _this.reprodutores = animais; }, function (error) { return _this.errorMessage = error; });
                    modal.showModal();
                };
                CoberturaFormComponent.prototype.listaMatriz = function (modal) {
                    var _this = this;
                    this._cadastroService.getAllMatriz()
                        .subscribe(function (animais) { return _this.reprodutores = animais; }, function (error) { return _this.errorMessage = error; });
                    modal.showModal();
                };
                CoberturaFormComponent.prototype.escolhaReprodutor = function (reprodutor, modal) {
                    var _this = this;
                    console.log('......');
                    this.cobertura.reprodutor = reprodutor;
                    modal.closeModal();
                    this.coberturaService.getPeso(this.cobertura.reprodutor.identificador).subscribe(function (peso) { return _this.cobertura.reprodutor.peso = peso; }, function (error) { return _this.errorMessage = error; });
                };
                CoberturaFormComponent.prototype.escolhaMatriz = function (matriz, modal) {
                    console.log('......');
                    this.cobertura.matriz = matriz;
                    modal.closeModal();
                };
                CoberturaFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/cobertura/cobertura.html',
                        providers: [http_1.HTTP_PROVIDERS, cadastro_service_1.CadastroService, cobertura_service_1.CoberturaService],
                        directives: [mydatepicker_1.MyDatePicker, fuel_ui_1.Modal]
                    }), 
                    __metadata('design:paramtypes', [cadastro_service_1.CadastroService, cobertura_service_1.CoberturaService])
                ], CoberturaFormComponent);
                return CoberturaFormComponent;
            }());
            exports_1("CoberturaFormComponent", CoberturaFormComponent);
        }
    }
});
//# sourceMappingURL=cobertura.component.js.map