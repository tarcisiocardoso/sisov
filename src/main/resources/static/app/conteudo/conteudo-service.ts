import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Animal} from '../cadastroAnimal/animais';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class ConteudoService {
  constructor (private http: Http) {}

  private _heroesUrl = '/animal';  // URL to web api

  getAnimais () {
    return this.http.get(this._heroesUrl)
                    .map(res => <Animal[]> res.json())
                    .do(data => console.log(data)) // eyeball results in the console
                    .catch(this.handleError);
  }
  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}