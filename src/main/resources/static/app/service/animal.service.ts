import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Animal } from '../cadastro/animais';
import { Peso } from '../cadastro/peso';

@Injectable()
export class AnimalService {
        
//    private rootUrl = 'app/animais';  // URL to web api
    public rootUrl = 'http://localhost:1234';
//    private rootUrl = 'animal';
    
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getAnimais(): Promise<Animal[]> {
        
        return this.http.get(this.rootUrl+"/animal")
            .toPromise()
            //.then(response => response.json().data as Animal[])
            .then(response => response.json() as Animal[])
            //.then( response => console.log( response.json().data ) )
            .catch(this.handleError);
    }
    
    getPesoDoAnimal(id:number): Promise<Peso[]> {
        return this.http.get(this.rootUrl+"/peso/"+id)
            .toPromise()
            .then(response => response.json() as Peso[])
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
    create(anim: Animal): Promise<Animal> {
      return this.http
        //.post(this.rootUrl+"/animal", JSON.stringify({animal: anim}), {headers: this.headers})
          .post(this.rootUrl+"/animal", anim, {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }
    
    addPeso(peso: Object): Promise<String> {
      return this.http
        //.post(this.rootUrl+"/animal", JSON.stringify({animal: anim}), {headers: this.headers})
          .post(this.rootUrl+"/peso", peso, {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }
    addFoto(foto: Object): Promise<String> {
      return this.http
        //.post(this.rootUrl+"/animal", JSON.stringify({animal: anim}), {headers: this.headers})
          .post(this.rootUrl+"/foto", foto, {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }
}
