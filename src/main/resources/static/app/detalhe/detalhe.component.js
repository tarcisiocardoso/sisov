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
var common_1 = require('@angular/common');
var animal_service_1 = require('../service/animal.service');
var DetalheComponent = (function () {
    function DetalheComponent(route, location, animalService) {
        this.route = route;
        this.location = location;
        this.animalService = animalService;
        this.isShowModalPeso = false;
        this.isShowModalFoto = false;
        this.escondeFoto = true;
        this.data = new Date();
        this.filesToUpload = [];
    }
    DetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            //this.heroService.getHero(id).then(hero => this.hero = hero);
            console.log('>>>' + id + '<<<');
        });
        this.animal = JSON.parse(localStorage.getItem("animal"));
        this.animalService.getPesoDoAnimal(this.animal.id).then(function (listaPeso) {
            var x;
            var arr = [];
            var categories = [];
            for (x in listaPeso) {
                categories.push(listaPeso[x].dtMedicao);
                arr.push(listaPeso[x].valor);
            }
            console.log(arr);
            _this.options = {
                title: { text: 'Ganho de peso' },
                chart: { zoomType: 'x' },
                xAxis: { categories: categories },
                series: [
                    {
                        data: arr,
                        allowPointSelect: true,
                        name: 'Peso'
                    }]
            };
        });
    };
    DetalheComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetalheComponent.prototype.onChartSelection = function (e) {
        console.log('>>>onChartSelection<<<');
        this.from = e.originalEvent.xAxis[0].min.toFixed(2);
        this.to = e.originalEvent.xAxis[0].max.toFixed(2);
    };
    DetalheComponent.prototype.onSeriesMouseOver = function (e) {
        console.log('>>>onSeriesMouseOver<<<');
        this.serieName = e.context.name;
    };
    DetalheComponent.prototype.onPointSelect = function (e) {
        console.log('>>>onPointSelect<<<');
        this.point = e.context.y;
    };
    DetalheComponent.prototype.cadastroPeso = function () {
        this.data = new Date();
        this.isShowModalPeso = !this.isShowModalPeso;
    };
    DetalheComponent.prototype.cadastroFoto = function () {
        this.isShowModalFoto = !this.isShowModalFoto;
    };
    DetalheComponent.prototype.hideErrorMsg = function () {
        this.isShowModalPeso = false;
        this.isShowModalFoto = false;
    };
    DetalheComponent.prototype.salvaPeso = function () {
        var _this = this;
        console.log(this.peso);
        console.log(this.data);
        if (!this.peso) {
            alert('Peso é obrigatorio');
            return;
        }
        if (!this.data) {
            alert('Data é obrigatorio');
            return;
        }
        //return ;
        var obj = {
            idAnimal: this.animal.id,
            dtMedicao: this.data,
            valor: this.peso
        };
        this.animalService.addPeso(obj)
            .then(function (retorno) {
            console.log(retorno);
            _this.hideErrorMsg();
            //this.selectedHero = null;
        });
    };
    DetalheComponent.prototype.salvaFoto = function () {
        var _this = this;
        var me = this;
        if (this.filesToUpload.length > 0) {
            this.makeFileRequest(this.animalService.rootUrl + "/upload", [], this.filesToUpload).then(function (result) {
                console.log('-->sucesso:' + result);
                //me.addAnimal(result['foto']);
                var obj = {
                    idAnimal: _this.animal.id,
                    dtInsert: _this.data,
                    pathImagem: result['foto']
                };
                _this.animalService.addFoto(obj)
                    .then(function (retorno) {
                    console.log(retorno);
                    _this.hideErrorMsg();
                    //this.selectedHero = null;
                });
            }, function (error) {
                console.error('-->error: ' + error);
            });
        }
        else {
            console.log('sem imagem para ser enviada');
        }
    };
    DetalheComponent.prototype.fileChangeEvent = function (fileInput) {
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
    DetalheComponent.prototype.makeFileRequest = function (url, params, files) {
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
    ], DetalheComponent.prototype, "inputFoto", void 0);
    DetalheComponent = __decorate([
        core_1.Component({
            selector: 'form-novo',
            templateUrl: 'app/detalhe/detalhe.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location, animal_service_1.AnimalService])
    ], DetalheComponent);
    return DetalheComponent;
}());
exports.DetalheComponent = DetalheComponent;
//# sourceMappingURL=detalhe.component.js.map