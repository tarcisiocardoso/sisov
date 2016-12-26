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
var router_1 = require('@angular/router');
var animal_service_1 = require('../service/animal.service');
var TabelasComponent = (function () {
    function TabelasComponent(router, animalService) {
        this.router = router;
        this.animalService = animalService;
        this.reprodutores = [];
        this.matriz = [];
        this.borrego = [];
        this.desempenho = 'success';
    }
    TabelasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animalService.getAnimais()
            .then(function (animais) {
            var x;
            for (x in animais) {
                var ano = _this.getAno(animais[x].dtNascimento);
                if (ano < 1) {
                    _this.borrego.push(animais[x]);
                }
                else {
                    if (animais[x].sexo === 'M') {
                        _this.reprodutores.push(animais[x]);
                    }
                    else {
                        _this.matriz.push(animais[x]);
                    }
                }
            }
        });
    };
    TabelasComponent.prototype.getAno = function (dataNascimento) {
        if (!dataNascimento)
            return -1;
        var dt = new Date(dataNascimento);
        var datenew = new Date(Date.now());
        var yNow = datenew.getFullYear();
        var yold = dt.getFullYear();
        return yNow - yold;
    };
    TabelasComponent.prototype.gotoDetail = function (animal) {
        console.log('ainda nao implementado: ', animal);
        localStorage.setItem("animal", JSON.stringify(animal));
        var link = ['/detalhe', animal.id];
        //let link = ['/detalhe'];
        this.router.navigate(link);
    };
    TabelasComponent.prototype.getIdade = function (dataNascimento) {
        if (!dataNascimento)
            return "-";
        var ret = '';
        var dt = new Date(dataNascimento);
        var datenew = new Date(Date.now());
        var yNow = datenew.getFullYear();
        var mNow = datenew.getMonth();
        var dNow = datenew.getDate();
        var yold = dt.getFullYear();
        var mold = dt.getMonth();
        var dold = dt.getDate();
        var diff = yNow - yold;
        if (mold > mNow) {
            diff--;
            ret = diff + ' ano ';
            if (dold > dNow) {
                diff--;
                ret += diff + " mes ";
            }
            else {
                if (dold != dNow) {
                    diff = dold - dNow;
                    ret += diff + " dia ";
                }
            }
        }
        else {
            if (mold == mNow) {
                if (dold > dNow)
                    diff--;
                if (diff == 0) {
                    if (dold > dNow) {
                        diff = 30 - dold;
                        ret += diff + " dia ";
                    }
                    else {
                        //ret = "recem nascido"
                        diff = dNow - dold;
                        ret = diff + " dia";
                    }
                }
                else {
                    ret = diff + ' ano ';
                    if (dold > dNow) {
                        diff--;
                        ret += diff + " mes ";
                    }
                    else {
                        if (dold != dNow) {
                            diff = dold - dNow;
                            ret += diff + " dia ";
                        }
                    }
                }
            }
            else {
                ret = diff + ' ano ';
                diff = Math.abs(mold - mNow);
                if (dold > dNow) {
                    diff--;
                    ret += diff + " mes ";
                }
                else {
                    ret += diff + " mes ";
                    if (dold != dNow) {
                        diff = Math.abs(dold - dNow);
                        ret += diff + " dia ";
                    }
                }
            }
        }
        return ret;
    };
    TabelasComponent = __decorate([
        core_1.Component({
            selector: 'tabelas',
            templateUrl: 'app/tabelas/tabelas.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, animal_service_1.AnimalService])
    ], TabelasComponent);
    return TabelasComponent;
}());
exports.TabelasComponent = TabelasComponent;
//# sourceMappingURL=tabelas.component.js.map