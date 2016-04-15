System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2, Observable_1;
    var CadastroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            CadastroService = (function () {
                function CadastroService(http) {
                    this.http = http;
                    /*
                    private _heroesUrl = 'app/heroes.json'; // URL to JSON file
                    */
                    this._heroesUrl = '/animal'; // URL to web api
                }
                CadastroService.prototype.getAllReprodutor = function () {
                    return this.http.get(this._heroesUrl + "/reprodutor")
                        .map(function (res) { return res.json(); })
                        .do(function (res) { return console.log(res); }) // eyeball results in the console
                        .catch(this.handleError);
                };
                CadastroService.prototype.getAllMatriz = function () {
                    return this.http.get(this._heroesUrl + "/matriz")
                        .map(function (res) { return res.json(); })
                        .do(function (res) { return console.log(res); }) // eyeball results in the console
                        .catch(this.handleError);
                };
                CadastroService.prototype.addAnimal = function (animal) {
                    var body = JSON.stringify(animal);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._heroesUrl, body, options)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                CadastroService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                CadastroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CadastroService);
                return CadastroService;
            }());
            exports_1("CadastroService", CadastroService);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=cadastro-service.js.map