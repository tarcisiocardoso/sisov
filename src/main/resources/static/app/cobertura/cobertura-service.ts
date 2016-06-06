import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Cobertura} from './cobertura';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class CoberturaService{
	private url = '/peso';  // URL to web api
    
	constructor(private http: Http) { }
    
    getPeso(idAnimal) {
        return this.http.get(this.url + "/"+idAnimal)
            .map(res => res)
            .do(res => console.log(res)) // eyeball results in the console
            .catch(this.handleError);
    }
 
    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}