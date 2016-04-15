import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Animal} from '../cadastroAnimal/animais';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class CadastroService {
    constructor(private http: Http) { }

    /*
    private _heroesUrl = 'app/heroes.json'; // URL to JSON file
    */

    private _heroesUrl = '/animal';  // URL to web api


    getAllReprodutor() {
        return this.http.get(this._heroesUrl + "/reprodutor")
            .map(res => <Animal[]>res.json())
            .do(res => console.log(res)) // eyeball results in the console
            .catch(this.handleError);
    }
    getAllMatriz() {
        return this.http.get(this._heroesUrl + "/matriz")
            .map(res => <Animal[]>res.json())
            .do(res => console.log(res)) // eyeball results in the console
            .catch(this.handleError);
    }
    addAnimal(animal: Animal): Observable<Animal> {

        let body = JSON.stringify(animal);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._heroesUrl, body, options)
            .map(res => <Animal>res.json().data)
            .catch(this.handleError)
    }

    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/