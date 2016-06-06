import {Component, ViewChild, ElementRef} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Animal}    from './animais';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {CadastroService} from './cadastro-service';
import {Modal} from '../fuel-ui/fuel-ui';

import {MyDatePicker} from '../datePicker/mydatepicker';


@Component({
    templateUrl: 'app/cadastroAnimal/cadastroAnimal.html',
    providers: [HTTP_PROVIDERS, CadastroService],
    directives: [MyDatePicker, Modal]
})
export class AnimalFormComponent {

    filesToUpload: Array<File>;
    reprodutores: Animal[];
    errorMessage: string;
    private RND = 3;
    
    @ViewChild('foto') inputFoto: ElementRef; 

    racas = ['Dorper', 'Santa Ines', 'Morada Nova', 'RND - Raça não definida', 
             '1/2 Dorder/Santa Ines', '1/2 Dorper/Morada Nova', '1/2 Santa Ines/Morada Nova', '1/2 Dorper/RND', '1/2 Santa Ines/RND', '1/2 Morada Nova/RND',
             '3/4 Dorper', '3/4 Santa Ines', '3/4 Morada Nova'];
    animal: Animal = new Animal(0); //(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    
    submitted = false;
    escondeFoto = true;
    
    constructor(private _cadastroService: CadastroService) { 
        this.animal.pai = new Animal(0);
        this.animal.mae = new Animal(0);  
        this.filesToUpload = [];
        
        let dt = new Date().toLocaleDateString();

        this.animal.dtNascimento = dt;
    }
    ngAfterViewInit() {
        console.log(this.inputFoto.nativeElement);
    }
    upload() {
        console.log( '....upload....');
        let me = this;
        if( this.filesToUpload.length > 0 ){
            this.makeFileRequest("/upload", [], this.filesToUpload).then((result) => {
                console.log('-->sucesso:' + result);
                me.addAnimal( result['foto'] );
                
            }, (error) => {
                console.error('-->error: '+error);
            });
        }else{
            me.addAnimal( null );
        }
    }
    novoCadastro(){
        this.animal = new Animal(0);
        this.submitted=false;
    }
    
    fileChangeEvent(fileInput: any){
        console.log('...fileChangeEvent...');
        this.filesToUpload = <Array<File>> fileInput.target.files;
        
        let reader = new FileReader();
        let foto = this.inputFoto.nativeElement;
        let me = this; 

        reader.onload = function () {
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
            
            for(var i = 0; i < files.length; i++) {
                formData.append("file", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                console.log('....onreadystatechange....');
                if (xhr.readyState == 4) {
                    console.log('xhr.status: '+xhr.status );
                    console.log('xhr.response: '+xhr.response);
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
    
    onSubmit() {
        this.upload();
    }

    addAnimal(foto: string) {
        this.animal.foto = foto;
        console.log( this.animal );
        this._cadastroService.addAnimal( this.animal )
            .subscribe(
            animal => this.cadastroOk(animal),
            error => this.errorMessage = <any>error);
    }
    private cadastroOk(animal: Animal){
        
        console.log( animal );
        
        this.submitted = true;
                    
    }

    active = true;

    private myDatePickerOptions = {
        todayBtnTxt: 'Hoje',
        dateFormat: 'dd/mm/yyyy',
        firstDayOfWeek: 'mo',
        sunHighlight: true
        //height: '34px',
        //width: '260px'
    };
    selectedDate: string = '20/12/2015';
    onDateChanged(event) {
        console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    }
    listaRaca(modal){
        modal.showModal();
    }
    listaReprodutores(modal) {
        this._cadastroService.getAllReprodutor()
            .subscribe(
                       animais => this.reprodutores = animais,
                       error =>  this.errorMessage = <any>error);
        modal.showModal();    
    }
    listaMatriz(modal) {
        this._cadastroService.getAllMatriz()
            .subscribe(
                       animais => this.reprodutores = animais,
                       error =>  this.errorMessage = <any>error);
        modal.showModal();
    }
    escolhaRaca(raca, modal){
        this.animal.raca = raca;
        modal.closeModal();    
    }
    escolhaReprodutor(reprodutor, modal) {
        console.log('......');
        this.animal.pai = reprodutor;
        modal.closeModal();
        this.redefineRaca();
    }
    escolhaMatriz(matriz, modal) {
        console.log('......');
        this.animal.mae = matriz;
        modal.closeModal();
        this.redefineRaca();
    }
    newHero() {
        this.animal = new Animal(0);
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    private getMDC(u, v) { 
        var U = u, V = v
        while (true) {
            if (!(U%=V)) return V
            if (!(V%=U)) return U 
        } 
    }
   //convert a decimal into a fraction
    private getFraction(decimal:number){
        if(!decimal){
            return '1';
        }
        
        let whole:string = String(decimal).split('.')[0];
        decimal = parseFloat("."+String(decimal).split('.')[1]);
        let num:any = "1";
        let z = 0;
        for(z=0; z<String(decimal).length-2; z++){
            num += "0";
        }
        decimal = decimal* parseFloat(num);
        num = parseInt(num);
        for(z=2; z<decimal+1; z++){
            if(decimal%z==0 && num%z==0){
                decimal = decimal/z;
                num = num/z;
                z=2;
            }
        }
        //if format of fraction is xx/xxx
        if (decimal.toString().length == 2 && 
            num.toString().length == 3) {
                //reduce by removing trailing 0's
                // '
        decimal = Math.round(Math.round(decimal)/10);
        num = Math.round(Math.round(num)/10);
    }
    //if format of fraction is xx/xx
    else if (decimal.toString().length == 2 && 
            num.toString().length == 2) {
        decimal = Math.round(decimal/10);
        num = Math.round(num/10);
    }
    //get highest common factor to simplify
    var t = this.getMDC(decimal, num);
        
    
    //return the fraction after simplifying it
    
    if(isNaN(+whole) === true)
    {
     whole = "";
    }
        
    if(isNaN(decimal) === true)
    {
        return ((+whole==0)?"" : whole);
    }
    else
    {
        return ((+whole==0)?"" : whole+" ")+decimal/t+"/"+num/t;
    }
    }
    
    private redefineRaca(){
        console.log('...redefineRaca....');
        if( this.animal.pai.raca == this.animal.mae.raca ){
            this.animal.raca = this.animal.pai.raca; // animais da mesma raça    
        }else{
            let rPai = this.normalizaRaca( this.animal.pai.raca ); 
            let rMae = this.normalizaRaca( this.animal.mae.raca );
            let fPai = rPai.fracao / 2;
            let fMae = rMae.fracao / 2;
            let fracao:string = '1';
            let raca = rPai.raca+'/'+rMae.raca;
            
            if( fMae == fPai ){
                fracao = this.getFraction( fPai );
            }else {
                fracao = this.getFraction( fPai+fMae );
            }
             if( fPai > fMae ){
                if( rPai.raca.indexOf(rMae.raca)>=0 || rMae.raca.indexOf(rPai.raca) >=0 ){
                    raca = rPai.raca;    
                    if( fMae > 0.25) fracao = '';    
                }else if (fPai < 0.5) {
                    raca = this.racas[this.RND];
                    fracao = '';    
                }else{
                    raca = rPai.raca;    
                }
                
            }else if( fMae > fPai ){
                 if( rMae.raca.indexOf(rPai.raca)>=0 || rPai.raca.indexOf(rMae.raca) >=0 ){
                    raca = rMae.raca; 
                    if( fPai > 0.25) fracao = '';    
                }else if( fMae < 0.5) {
                    raca = this.racas[this.RND];
                    fracao = '';    
                }else{
                    raca = rMae.raca;    
                }
            }else{
                 //não possue raça em comum rnd
                 if( !(rMae.raca.indexOf(rPai.raca)>=0 || rPai.raca.indexOf(rMae.raca) >=0) ){
                    raca = this.racas[this.RND];
                    fracao = '';
                 }
            }
            
            this.animal.raca = fracao+' '+raca;
            
            console.log('fPai + fMae ['+ fPai +' + '+fMae +']:'+ (fPai + fMae) +' <=> '+ rPai.raca+', '+rMae.raca+ ' , fracao: '+ fracao);
            
//            if( rPai.fracao == rMae.fracao ){
//                
//                 
//            }else if( fPai + fMae < 0.8 && (rPai.raca.indexOf(rMae.raca)>=0 || rMae.raca.indexOf(rPai.raca) >=0) ){
//                this.animal.raca = this.racas[this.RND];
//            }else if( rPai > rMae) {
//                let fracao: string = this.getFraction(fPai + fMae);
//                this.animal.raca = fracao+' '+rPai.raca;
//            }else{
//                let fracao = this.getFraction(fPai + fMae);
//                
//                this.animal.raca = fracao+' '+rMae.raca;
//             }
        }
        console.log('>>> '+ this.animal.raca +' <<<<<<<<');
    }
    private getIndiceRaca(raca: string){
        let index = -1, i=0;
        for ( i=0; i < this.racas.length; i++){
            if( raca == this.racas[i] ){
                index = i;
                break;    
            }
        }
        return index;
    }
    private normalizaRaca( rc:string){
        
        if( !rc ){
            return { 
                        fracao: 1, 
                        raca: 'RND'
                  };
        }
        let f :number = 1;
        
        if ( !isNaN( +rc.charAt(0) ) ){
            let pos : number = rc.indexOf(' ');
            let frac = rc.substring(0, pos);
            
            let arr = frac.split('/');
            let num:any = arr[0];
            let dem:any = arr[1];
            f = num/dem;
            rc = rc.substring(pos+1, rc.length );
        }
        let retorno = { 
                        fracao: f, 
                        raca: rc
                  };
        return retorno;
    }
}