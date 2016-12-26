import { Component, OnInit, ViewChild, ElementRef }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import {AnimalService} from '../service/animal.service';
import {Animal}                   from '../cadastro/animais';

@Component({
    selector: 'form-novo',
    templateUrl: 'app/detalhe/detalhe.html',

})

/**
 * https://github.com/gevgeny/angular2-highcharts
 * http://api.highcharts.com/highcharts
 */
export class DetalheComponent implements OnInit {

    public animal: Animal;
    options: Object;
    serieName: string;
    from: string;
    to: string;
    point: number;
    isShowModalPeso: boolean = false;
    isShowModalFoto: boolean = false;
    escondeFoto: boolean = true;
    filesToUpload: Array<File>;
    @ViewChild('foto') inputFoto: ElementRef;

    peso: number;
    data: Date = new Date();

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private animalService: AnimalService
    ) {
        this.filesToUpload = [];
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            //this.heroService.getHero(id).then(hero => this.hero = hero);
            console.log('>>>' + id + '<<<');
        });

        this.animal = JSON.parse(localStorage.getItem("animal"));

        this.animalService.getPesoDoAnimal(this.animal.id).then(listaPeso => {
            let x;
            let arr = [];
            let categories = [];

            for (x in listaPeso) {
                categories.push(listaPeso[x].dtMedicao);
                arr.push(listaPeso[x].valor);
            }
            console.log(arr);
            this.options = {
                title: { text: 'Ganho de peso' },
                chart: { zoomType: 'x' },
                xAxis: { categories },
                series: [
                    {
                        data: arr,
                        allowPointSelect: true,
                        name: 'Peso'
                    }]
            };

        });
    }

    goBack(): void {
        this.location.back();
    }

    onChartSelection(e) {
        console.log('>>>onChartSelection<<<');

        this.from = e.originalEvent.xAxis[0].min.toFixed(2);
        this.to = e.originalEvent.xAxis[0].max.toFixed(2);
    }

    onSeriesMouseOver(e) {
        console.log('>>>onSeriesMouseOver<<<');
        this.serieName = e.context.name;
    }
    onPointSelect(e) {
        console.log('>>>onPointSelect<<<');
        this.point = e.context.y;
    }

    cadastroPeso() {
        this.data = new Date();
        this.isShowModalPeso = !this.isShowModalPeso;
    }
    cadastroFoto() {
        this.isShowModalFoto = !this.isShowModalFoto;
    }
    hideErrorMsg() {
        this.isShowModalPeso = false;
        this.isShowModalFoto = false;
    }

    salvaPeso() {
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

        let obj = {
            idAnimal: this.animal.id,
            dtMedicao: this.data,
            valor: this.peso
        };
        this.animalService.addPeso(obj)
            .then(retorno => {
                console.log(retorno);
                this.hideErrorMsg();
                //this.selectedHero = null;
            });
    }
    salvaFoto(){
        let me = this;
        if (this.filesToUpload.length > 0) {
            this.makeFileRequest(this.animalService.rootUrl+"/upload", [], this.filesToUpload).then((result) => {
                console.log('-->sucesso:' + result);
                //me.addAnimal(result['foto']);
                let obj = {
                    idAnimal: this.animal.id,
                    dtInsert: this.data,
                    pathImagem: result['foto']
                    
                };
                this.animalService.addFoto(obj)
                    .then(retorno => {
                        console.log(retorno);
                        this.hideErrorMsg();
                        //this.selectedHero = null;
                    });

            }, (error) => {
                console.error('-->error: ' + error);
            });
        } else {
            console.log('sem imagem para ser enviada');
        }
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