System.register(['angular2/core', './animais'], function(exports_1, context_1) {
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
    var core_1, animais_1;
    var AnimalFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (animais_1_1) {
                animais_1 = animais_1_1;
            }],
        execute: function() {
            AnimalFormComponent = (function () {
                function AnimalFormComponent() {
                    this.powers = ['Really Smart', 'Super Flexible',
                        'Super Hot', 'Weather Changer'];
                    this.model = new animais_1.Animal(18, '001', '01/01/2016'); //(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
                    this.submitted = false;
                    // Reset the form with a new hero AND restore 'pristine' class state
                    // by toggling 'active' flag which causes the form
                    // to be removed/re-added in a tick via NgIf
                    // TODO: Workaround until NgForm has a reset method (#6822)
                    this.active = true;
                }
                AnimalFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                AnimalFormComponent.prototype.newHero = function () {
                    var _this = this;
                    this.model = new animais_1.Animal(42, '', '');
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                AnimalFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/cadastroAnimal/cadastroAnimal.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AnimalFormComponent);
                return AnimalFormComponent;
            }());
            exports_1("AnimalFormComponent", AnimalFormComponent);
        }
    }
});
//# sourceMappingURL=cadastro-animal.component.js.map